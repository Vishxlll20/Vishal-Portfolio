import * as THREE from 'three';
import { CharacterRig } from './CharacterRig.js';
import { BicycleRig } from './BicycleRig.js';
import { buildStoryWorld } from './WorldBuilder.js';

export class StoryScene {
  constructor(canvas, data, callbacks = {}) {
    this.canvas = canvas;
    this.data = data;
    this.callbacks = callbacks;

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2(0, 0);
    this.smoothPointer = new THREE.Vector2(0, 0);

    // Scroll story progress (0..1)
    this.targetProgress = 0;
    this.smoothProgress = 0;
    this.lastX = 0;

    this._initRenderer();
    this._initScene();
    this._initLighting();
    this._initStars();

    this.world = buildStoryWorld(this.scene, data);
    this.character = new CharacterRig();
    this.scene.add(this.character.group);

    this.bicycle = new BicycleRig();
    this.bicycle.group.position.set(19.5, 0, 0);
    this.bicycle.group.rotation.y = Math.PI / 2;
    this.scene.add(this.bicycle.group);

    this.cameraTargetPos = new THREE.Vector3(0.4, 2.0, 5.6);
    this.cameraTargetLook = new THREE.Vector3(0.0, 1.25, -0.4);
    this.currentLook = new THREE.Vector3(0.0, 1.25, -0.4);

    this._bindEvents();

    if (this.callbacks.onReady) {
      requestAnimationFrame(() => this.callbacks.onReady());
    }

    this._animate();
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.skyColors = {
      dawn: new THREE.Color(0x09090b),   // Midnight Black
      sunset: new THREE.Color(0x0b0b0e), // Deep Midnight Slate
      studio: new THREE.Color(0x070709), // Pure Studio Obsidian
    };
    this.scene.background = this.skyColors.dawn.clone();
    this.scene.fog = new THREE.FogExp2(0x09090b, 0.018);

    this.camera = new THREE.PerspectiveCamera(46, this.width / this.height, 0.1, 140);
    this.camera.position.set(0.4, 2.0, 5.6);
  }

  _initLighting() {
    const hemi = new THREE.HemisphereLight(0xffffff, 0x18181b, 0.95);
    this.scene.add(hemi);

    this.sunLight = new THREE.DirectionalLight(0xffffff, 2.1);
    this.sunLight.position.set(12, 18, 12);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 60;
    const d = 16;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    const rim = new THREE.DirectionalLight(0xa3e635, 0.45);
    rim.position.set(-8, 8, -10);
    this.scene.add(rim);
  }

  _initStars() {
    // Minimal lime & white atmospheric particles
    const count = 260;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = -10 + Math.random() * 120;
      positions[i * 3 + 1] = 1 + Math.random() * 14;
      positions[i * 3 + 2] = -20 + Math.random() * 22;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.starsMat = new THREE.PointsMaterial({
      color: 0xa3e635,
      size: 0.075,
      transparent: true,
      opacity: 0.4,
    });
    this.stars = new THREE.Points(geo, this.starsMat);
    this.scene.add(this.stars);
  }

  _bindEvents() {
    this._onResize = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(this.pixelRatio);
    };

    this._onPointerMove = (e) => {
      this.pointer.x = (e.clientX / this.width) * 2 - 1;
      this.pointer.y = -(e.clientY / this.height) * 2 + 1;
    };

    this._onClick = (e) => {
      if (e.target.closest('button, a, input, textarea, .hud-interactive, .modal-panel')) {
        return;
      }
      this.raycaster.setFromCamera(this.pointer, this.camera);

      // Check character click -> friendly wave
      const charHits = this.raycaster.intersectObject(this.character.group, true);
      if (charHits.length > 0) {
        this.character.triggerWave();
        return;
      }

      // Check world interactables (monoliths, monitors)
      const hits = this.raycaster.intersectObjects(this.world.interactables, false);
      if (hits.length > 0) {
        const data = hits[0].object.userData;
        if (data.type === 'monolith' && this.callbacks.onMonolithClick) {
          this.callbacks.onMonolithClick(data.id);
        } else if (data.type === 'monitor') {
          this.character.triggerWave();
        }
      }
    };

    window.addEventListener('resize', this._onResize);
    window.addEventListener('pointermove', this._onPointerMove, { passive: true });
    window.addEventListener('click', this._onClick);
  }

  setStoryProgress(p) {
    this.targetProgress = THREE.MathUtils.clamp(p, 0, 1);
  }

  focusMonolith(id) {
    this.world.monoliths.forEach((m) => {
      const active = m.id === id;
      m.group.scale.setScalar(active ? 1.07 : 1.0);
    });
  }

  _updateStoryTimeline(p, elapsed, dt) {
    // 1. Sky & Atmosphere transition across chapters
    if (p < 0.48) {
      const t = THREE.MathUtils.smoothstep(p, 0.2, 0.48);
      this.scene.background.lerpColors(this.skyColors.dawn, this.skyColors.sunset, t);
    } else {
      const t = THREE.MathUtils.smoothstep(p, 0.48, 0.72);
      this.scene.background.lerpColors(this.skyColors.sunset, this.skyColors.studio, t);
    }
    this.scene.fog.color.copy(this.scene.background);

    // 2. Character & Bicycle State Machine along progress p (0..1)
    let pose = 'idle';
    let charX = 0;
    let charY = 0;
    let charZ = 0;
    let charRotY = 0.42;
    let stridePhase = 0;

    // Helper for smooth segment mapping
    const seg = (start, end) => THREE.MathUtils.clamp((p - start) / (end - start), 0, 1);

    if (p < 0.08) {
      // Chapter 1: Starting Point
      pose = 'idle';
      charX = 0;
      charRotY = THREE.MathUtils.lerp(0.45, Math.PI / 2, seg(0.02, 0.08));
      this.bicycle.group.position.set(19.5, 0, 0);
      this.bicycle.group.rotation.y = Math.PI / 2;

      this.cameraTargetPos.set(0.3, 2.05, 5.8);
      this.cameraTargetLook.set(-0.2, 1.35, -0.4);
    } else if (p < 0.30) {
      // Chapter 2: Walking to School (x: 0 -> 19.2)
      const t = seg(0.08, 0.30);
      charX = THREE.MathUtils.lerp(0, 19.2, t);
      pose = Math.abs(charX - this.lastX) > 0.002 ? 'walk' : 'idle';
      stridePhase = charX * 2.5;
      charRotY = Math.PI / 2;

      this.bicycle.group.position.set(19.5, 0, 0);
      this.bicycle.group.rotation.y = Math.PI / 2;

      this.cameraTargetPos.set(charX + 1.4, 2.35, 6.8);
      this.cameraTargetLook.set(charX + 0.6, 1.45, -1.6);
    } else if (p < 0.54) {
      // Chapter 3: Riding Bicycle to R.V.S. College (x: 19.5 -> 42.0)
      const t = seg(0.30, 0.54);
      charX = THREE.MathUtils.lerp(19.5, 42.0, t);
      pose = 'cycle';
      charRotY = Math.PI / 2;
      charY = 0.06;

      // Keep Vishal centered over the bicycle saddle
      this.bicycle.group.position.set(charX, 0, 0);
      this.bicycle.group.rotation.y = Math.PI / 2;
      const travelDist = charX - 19.5;
      const wheelAngle = travelDist / this.bicycle.wheelRadius;
      this.bicycle.setWheelAngle(wheelAngle);
      stridePhase = wheelAngle * 1.35;

      this.cameraTargetPos.set(charX + 1.2, 2.3, 6.9);
      this.cameraTargetLook.set(charX + 1.2, 1.6, -2.0);
    } else if (p < 0.63) {
      // Transition: Park Bike at College & Walk to Studio Desk (x: 42 -> 59.5)
      const t = seg(0.54, 0.63);
      charX = THREE.MathUtils.lerp(42.0, this.world.chairWorldAnchor.x, t);
      charZ = THREE.MathUtils.lerp(0, this.world.chairWorldAnchor.z, t);
      charY = THREE.MathUtils.lerp(0, this.world.chairWorldAnchor.y, t);
      pose = Math.abs(charX - this.lastX) > 0.002 ? 'walk' : 'idle';
      stridePhase = charX * 2.5;
      charRotY = THREE.MathUtils.lerp(
        Math.PI / 2,
        this.world.deskRotationY + Math.PI,
        THREE.MathUtils.smoothstep(t, 0.65, 1.0)
      );

      // Bike stays parked beside college entrance
      this.bicycle.group.position.set(42.2, 0, 1.55);
      this.bicycle.group.rotation.y = Math.PI * 0.35;

      this.cameraTargetPos.set(
        THREE.MathUtils.lerp(43.2, 56.6, t),
        THREE.MathUtils.lerp(2.3, 2.45, t),
        THREE.MathUtils.lerp(6.9, 4.6, t)
      );
      this.cameraTargetLook.set(
        THREE.MathUtils.lerp(43.2, 60.2, t),
        THREE.MathUtils.lerp(1.6, 1.25, t),
        THREE.MathUtils.lerp(-2.0, -0.5, t)
      );
    } else if (p < 0.74) {
      // Chapter 4: Seated at Setup & Coding!
      pose = 'code';
      charX = this.world.chairWorldAnchor.x;
      charY = this.world.chairWorldAnchor.y;
      charZ = this.world.chairWorldAnchor.z;
      charRotY = this.world.deskRotationY + Math.PI;

      this.bicycle.group.position.set(42.2, 0, 1.55);
      this.bicycle.group.rotation.y = Math.PI * 0.35;

      const t = seg(0.63, 0.74);
      // Slight gentle cinematic pan around the coding desk
      this.cameraTargetPos.set(56.5 + t * 1.4, 2.45 - t * 0.15, 4.55);
      this.cameraTargetLook.set(60.3, 1.28, -0.5);
    } else if (p < 0.90) {
      // Chapter 5: Shipped Internships & Project Monoliths (x: 70 -> 89)
      pose = 'code';
      charX = this.world.chairWorldAnchor.x;
      charY = this.world.chairWorldAnchor.y;
      charZ = this.world.chairWorldAnchor.z;
      charRotY = this.world.deskRotationY + Math.PI;

      const t = seg(0.74, 0.90);
      const focusX = THREE.MathUtils.lerp(71.5, 89.0, t);
      this.cameraTargetPos.set(focusX - 2.0, 2.8, 8.2);
      this.cameraTargetLook.set(focusX, 1.85, -0.3);
    } else {
      // Chapter 6: Centered Opportunity Monument at end of path
      pose = 'code';
      charX = this.world.chairWorldAnchor.x;
      charY = this.world.chairWorldAnchor.y;
      charZ = this.world.chairWorldAnchor.z;
      charRotY = this.world.deskRotationY + Math.PI;

      const t = seg(0.90, 1.0);
      this.cameraTargetPos.set(THREE.MathUtils.lerp(88.5, 95.6, t), THREE.MathUtils.lerp(2.8, 2.55, t), 8.6);
      this.cameraTargetLook.set(THREE.MathUtils.lerp(89.5, 96.4, t), 2.1, 0.0);
    }

    this.lastX = charX;
    this.character.group.position.set(charX, charY, charZ);
    this.character.group.rotation.y = THREE.MathUtils.lerp(
      this.character.group.rotation.y,
      charRotY,
      0.16
    );
    this.character.update(pose, elapsed, stridePhase, dt);

    // Keep directional shadow frustum centered near camera/character
    this.sunLight.position.set(this.camera.position.x + 10, 18, 12);
    this.sunLight.target.position.set(this.camera.position.x, 0, -2);
  }

  _animate() {
    this._rafId = requestAnimationFrame(() => this._animate());

    const dt = Math.min(this.clock.getDelta(), 0.05);
    const elapsed = this.clock.elapsedTime;

    // Smoothly catch up to scroll progress
    this.smoothProgress = THREE.MathUtils.lerp(this.smoothProgress, this.targetProgress, 0.085);
    this.smoothPointer.lerp(this.pointer, 0.06);

    this._updateStoryTimeline(this.smoothProgress, elapsed, dt);
    this.world.update(elapsed);

    // Subtle pointer parallax on camera
    const desiredCam = new THREE.Vector3(
      this.cameraTargetPos.x + this.smoothPointer.x * 0.35,
      this.cameraTargetPos.y + this.smoothPointer.y * 0.2,
      this.cameraTargetPos.z
    );
    this.camera.position.lerp(desiredCam, 0.08);
    this.currentLook.lerp(this.cameraTargetLook, 0.08);
    this.camera.lookAt(this.currentLook);

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    cancelAnimationFrame(this._rafId);
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('click', this._onClick);
    this.renderer.dispose();
  }
}
