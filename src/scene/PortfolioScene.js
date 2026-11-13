import * as THREE from 'three';
import { coreVertexShader, coreFragmentShader } from '../shaders/coreShaders.js';
import { particleVertexShader, particleFragmentShader } from '../shaders/particleShaders.js';
import { holoVertexShader, holoFragmentShader } from '../shaders/holoShaders.js';
import { createProjectTexture } from './textures.js';

export class PortfolioScene {
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

    // Interactive state
    this.isDragging = false;
    this.dragDelta = { x: 0, y: 0 };
    this.userOrbit = { x: 0, y: 0 };
    this.lastPointer = { x: 0, y: 0 };

    this.scrollProgress = 0; // 0..1 overall page scroll
    this.worksVisibility = 0; // 0..1 controlled by ScrollTrigger
    this.skillsSpread = 0; // 0..1 controlled by ScrollTrigger
    this.activeSkillId = null;
    this.focusedProjectIndex = 0;
    this.hoveredObject = null;

    // Lab parameters
    this.params = {
      distortion: 0.28,
      turbulence: 0.35,
      wireframe: false,
      autoOrbit: true,
      pulse: 0,
    };

    // Camera choreography targets
    this.cameraTargetPos = new THREE.Vector3(1.8, 0.25, 6.4);
    this.cameraTargetLook = new THREE.Vector3(0.6, 0.0, 0.0);
    this.currentLookAt = new THREE.Vector3(0.6, 0.0, 0.0);

    this.skillNodes = [];
    this.holoSlabs = [];
    this.rings = [];

    this._initRenderer();
    this._initScene();
    this._initLighting();
    this._initCoreSculpture();
    this._initSkillConstellation();
    this._initProjectHoloStage();
    this._initParticles();
    this._bindEvents();

    // Signal ready for preloader
    if (this.callbacks.onReady) {
      requestAnimationFrame(() => this.callbacks.onReady());
    }

    this._animate();
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x06070a, 0.042);

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.copy(this.cameraTargetPos);
    this.scene.add(this.camera);

    this.worldGroup = new THREE.Group();
    this.scene.add(this.worldGroup);
  }

  _initLighting() {
    const ambient = new THREE.AmbientLight(0xdbeafe, 0.45);
    this.scene.add(ambient);

    this.keyLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    this.keyLight.position.set(5, 6, 6);
    this.scene.add(this.keyLight);

    this.rimLight = new THREE.PointLight(0x818cf8, 4.5, 24);
    this.rimLight.position.set(-5, -2, 3);
    this.scene.add(this.rimLight);
  }

  _initCoreSculpture() {
    const preset = this.data.presets[0];
    this.coreGroup = new THREE.Group();
    // Offset slightly right on desktop so hero headline breathes on the left
    this.coreGroup.position.set(this.width > 900 ? 1.55 : 0, 0, 0);
    this.worldGroup.add(this.coreGroup);

    // 1. Displaced Shader Core
    const coreGeo = new THREE.IcosahedronGeometry(1.38, 42);
    this.coreUniforms = {
      uTime: { value: 0 },
      uDistortion: { value: this.params.distortion },
      uPulse: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorA: { value: new THREE.Color(preset.coreColorA) },
      uColorB: { value: new THREE.Color(preset.coreColorB) },
      uRimColor: { value: new THREE.Color(preset.rimColor) },
    };

    this.coreMaterial = new THREE.ShaderMaterial({
      vertexShader: coreVertexShader,
      fragmentShader: coreFragmentShader,
      uniforms: this.coreUniforms,
      transparent: true,
      wireframe: this.params.wireframe,
    });

    this.coreMesh = new THREE.Mesh(coreGeo, this.coreMaterial);
    this.coreMesh.userData = { type: 'core' };
    this.coreGroup.add(this.coreMesh);

    // 2. Outer Geodesic Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.78, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(preset.rimColor),
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    this.cageMesh = new THREE.Mesh(cageGeo, cageMat);
    this.coreGroup.add(this.cageMesh);

    // 3. Precision Gyroscope Rings
    const ringConfigs = [
      { radius: 2.15, tube: 0.012, tiltX: Math.PI * 0.35, tiltY: 0.2, speed: 0.25 },
      { radius: 2.48, tube: 0.009, tiltX: -Math.PI * 0.28, tiltY: -0.45, speed: -0.18 },
      { radius: 2.82, tube: 0.007, tiltX: Math.PI * 0.48, tiltY: 0.6, speed: 0.14 },
    ];

    ringConfigs.forEach((cfg, i) => {
      const ringGroup = new THREE.Group();
      ringGroup.rotation.set(cfg.tiltX, cfg.tiltY, 0);

      const torusGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 120);
      const torusMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        emissive: new THREE.Color(i === 0 ? preset.coreColorA : preset.coreColorB),
        emissiveIntensity: 0.45,
        metalness: 0.85,
        roughness: 0.2,
        transparent: true,
        opacity: 0.62,
      });
      const torus = new THREE.Mesh(torusGeo, torusMat);
      ringGroup.add(torus);

      // Small orbital node along the ring
      const markerGeo = new THREE.OctahedronGeometry(0.065, 0);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.set(cfg.radius, 0, 0);
      ringGroup.add(marker);

      ringGroup.userData = { speed: cfg.speed, torusMat };
      this.rings.push(ringGroup);
      this.coreGroup.add(ringGroup);
    });
  }

  _initSkillConstellation() {
    this.skillsGroup = new THREE.Group();
    this.coreGroup.add(this.skillsGroup);

    const skills = this.data.skills;
    const count = skills.length;

    skills.forEach((skill, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3.35;
      const yOffset = Math.sin(i * 1.7) * 0.85;

      const nodeGroup = new THREE.Group();
      nodeGroup.userData = {
        type: 'skill',
        skill,
        baseAngle: angle,
        radius,
        yOffset,
      };

      const geo = new THREE.OctahedronGeometry(0.16, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        emissive: new THREE.Color(this.data.presets[0].rimColor),
        emissiveIntensity: 0.4,
        metalness: 0.7,
        roughness: 0.25,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData = { type: 'skill', skill };
      nodeGroup.add(mesh);

      // Halo ring around node
      const haloGeo = new THREE.RingGeometry(0.22, 0.245, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(this.data.presets[0].rimColor),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      nodeGroup.add(halo);

      // Energy tether from core to skill node
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(this.data.presets[0].coreColorA),
        transparent: true,
        opacity: 0.12,
      });
      const tether = new THREE.Line(lineGeo, lineMat);

      this.skillsGroup.add(tether);
      this.skillsGroup.add(nodeGroup);

      this.skillNodes.push({ nodeGroup, mesh, halo, haloMat, mat, tether, lineMat, skill });
    });
  }

  _initProjectHoloStage() {
    this.projectsGroup = new THREE.Group();
    // Placed in a spatial stage offset below/right, brought into focus on scroll
    this.projectsGroup.position.set(1.6, -0.15, -3.5);
    this.projectsGroup.visible = false;
    this.worldGroup.add(this.projectsGroup);

    this.data.projects.forEach((project, idx) => {
      const texture = createProjectTexture(project, idx);
      const geo = new THREE.PlaneGeometry(3.6, 2.25, 32, 20);
      const uniforms = {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uHover: { value: 0 },
        uFocus: { value: idx === 0 ? 1 : 0 },
        uAccent: { value: new THREE.Color(project.accent) },
      };

      const mat = new THREE.ShaderMaterial({
        vertexShader: holoVertexShader,
        fragmentShader: holoFragmentShader,
        uniforms,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData = { type: 'project', project, index: idx };

      // Staggered depth arc
      mesh.position.set(0, 0, -idx * 0.9);
      this.projectsGroup.add(mesh);

      this.holoSlabs.push({
        mesh,
        uniforms,
        project,
        index: idx,
        targetHover: 0,
        targetFocus: idx === 0 ? 1 : 0,
      });
    });
  }

  _initParticles() {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const phases = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color(this.data.presets[0].coreColorA);
    const c2 = new THREE.Color(this.data.presets[0].coreColorB);
    const cWhite = new THREE.Color('#e2e8f0');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 3.2 + Math.random() * 14.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = (Math.random() - 0.5) * 14.0;
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 2.0;

      scales[i] = 0.6 + Math.random() * 2.2;
      phases[i] = Math.random() * Math.PI * 2;

      const mixPick = Math.random();
      const col = mixPick < 0.35 ? c1 : mixPick < 0.7 ? c2 : cWhite;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

    this.particleUniforms = {
      uTime: { value: 0 },
      uPixelRatio: { value: this.pixelRatio },
      uTurbulence: { value: this.params.turbulence },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };

    const mat = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: this.particleUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
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
      this.particleUniforms.uPixelRatio.value = this.pixelRatio;
    };

    this._onPointerMove = (e) => {
      const nx = (e.clientX / this.width) * 2 - 1;
      const ny = -(e.clientY / this.height) * 2 + 1;
      this.pointer.set(nx, ny);

      if (this.isDragging) {
        const dx = e.clientX - this.lastPointer.x;
        const dy = e.clientY - this.lastPointer.y;
        this.userOrbit.y += dx * 0.0055;
        this.userOrbit.x += dy * 0.004;
        this.userOrbit.x = THREE.MathUtils.clamp(this.userOrbit.x, -0.8, 0.8);
        this.lastPointer = { x: e.clientX, y: e.clientY };
      }
    };

    this._onPointerDown = (e) => {
      // Only start canvas drag if user clicked on canvas / hero backdrop, not UI controls
      if (e.target.closest('button, a, input, select, textarea, .interactive-card, .modal-panel')) {
        return;
      }
      this.isDragging = true;
      this.lastPointer = { x: e.clientX, y: e.clientY };
    };

    this._onPointerUp = () => {
      this.isDragging = false;
    };

    this._onClick = (e) => {
      if (e.target.closest('button, a, input, select, textarea, .interactive-card, .modal-panel')) {
        return;
      }
      this._handleRaycastClick();
    };

    window.addEventListener('resize', this._onResize);
    window.addEventListener('pointermove', this._onPointerMove, { passive: true });
    window.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointerup', this._onPointerUp);
    window.addEventListener('click', this._onClick);
  }

  _handleRaycastHover() {
    this.raycaster.setFromCamera(this.pointer, this.camera);

    const pickables = [this.coreMesh, ...this.skillNodes.map((n) => n.mesh)];
    if (this.projectsGroup.visible) {
      pickables.push(...this.holoSlabs.map((s) => s.mesh));
    }

    const hits = this.raycaster.intersectObjects(pickables, false);
    if (hits.length > 0) {
      const hitObj = hits[0].object;
      if (this.hoveredObject !== hitObj) {
        this.hoveredObject = hitObj;
        document.body.classList.add('canvas-hovering');
        if (hitObj.userData.type === 'skill' && this.callbacks.onSkillHover) {
          this.callbacks.onSkillHover(hitObj.userData.skill.id);
        }
      }
    } else if (this.hoveredObject) {
      if (this.hoveredObject.userData.type === 'skill' && this.callbacks.onSkillHover) {
        this.callbacks.onSkillHover(null);
      }
      this.hoveredObject = null;
      document.body.classList.remove('canvas-hovering');
    }
  }

  _handleRaycastClick() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const pickables = [this.coreMesh, ...this.skillNodes.map((n) => n.mesh)];
    if (this.projectsGroup.visible) {
      pickables.push(...this.holoSlabs.map((s) => s.mesh));
    }
    const hits = this.raycaster.intersectObjects(pickables, false);
    if (!hits.length) return;

    const hit = hits[0].object;
    if (hit.userData.type === 'core') {
      this.triggerPulse();
    } else if (hit.userData.type === 'project' && this.callbacks.onProjectSelect) {
      this.callbacks.onProjectSelect(hit.userData.project.id);
    } else if (hit.userData.type === 'skill' && this.callbacks.onSkillSelect) {
      this.triggerPulse();
      this.callbacks.onSkillSelect(hit.userData.skill.id);
    }
  }

  // Public Interactive API
  triggerPulse() {
    this.params.pulse = 1.0;
  }

  setDistortion(val) {
    this.params.distortion = val;
    this.coreUniforms.uDistortion.value = val;
  }

  setTurbulence(val) {
    this.params.turbulence = val;
    this.particleUniforms.uTurbulence.value = val;
  }

  setWireframe(enabled) {
    this.params.wireframe = enabled;
    this.coreMaterial.wireframe = enabled;
  }

  setAutoOrbit(enabled) {
    this.params.autoOrbit = enabled;
  }

  setPreset(preset) {
    const colA = new THREE.Color(preset.coreColorA);
    const colB = new THREE.Color(preset.coreColorB);
    const rim = new THREE.Color(preset.rimColor);

    this.coreUniforms.uColorA.value.copy(colA);
    this.coreUniforms.uColorB.value.copy(colB);
    this.coreUniforms.uRimColor.value.copy(rim);

    this.cageMesh.material.color.copy(rim);
    this.keyLight.color.copy(rim);
    this.rimLight.color.copy(colB);

    this.rings.forEach((r, idx) => {
      r.userData.torusMat.emissive.copy(idx === 0 ? colA : colB);
    });

    this.skillNodes.forEach((n) => {
      n.mat.emissive.copy(rim);
      n.haloMat.color.copy(rim);
      n.lineMat.color.copy(colA);
    });

    this.triggerPulse();
  }

  highlightSkill(skillId) {
    this.activeSkillId = skillId;
  }

  focusProject(projectId) {
    const idx = this.holoSlabs.findIndex((s) => s.project.id === projectId);
    if (idx !== -1) {
      this.focusedProjectIndex = idx;
      this.holoSlabs.forEach((slab, i) => {
        slab.targetFocus = i === idx ? 1 : 0;
      });
    }
  }

  setCameraChoreography(pos, lookAt) {
    this.cameraTargetPos.set(pos.x, pos.y, pos.z);
    this.cameraTargetLook.set(lookAt.x, lookAt.y, lookAt.z);
  }

  setWorksVisibility(val) {
    this.worksVisibility = THREE.MathUtils.clamp(val, 0, 1);
    this.projectsGroup.visible = this.worksVisibility > 0.02;
  }

  setSkillsSpread(val) {
    this.skillsSpread = THREE.MathUtils.clamp(val, 0, 1);
  }

  _animate() {
    this._rafId = requestAnimationFrame(() => this._animate());

    const elapsed = this.clock.getElapsedTime();

    // Smooth pointer tracking
    this.smoothPointer.lerp(this.pointer, 0.06);
    this.coreUniforms.uMouse.value.copy(this.smoothPointer);
    this.particleUniforms.uMouse.value.copy(this.smoothPointer);

    // Decay pulse
    this.params.pulse *= 0.94;
    if (this.params.pulse < 0.001) this.params.pulse = 0;

    // Update shader uniforms
    this.coreUniforms.uTime.value = elapsed;
    this.coreUniforms.uPulse.value = this.params.pulse;
    this.particleUniforms.uTime.value = elapsed;

    // Core sculpture rotation + user drag + subtle mouse tilt
    const autoRot = this.params.autoOrbit ? elapsed * 0.14 : 0;
    const targetRotY = autoRot + this.userOrbit.y + this.smoothPointer.x * 0.28;
    const targetRotX = this.userOrbit.x - this.smoothPointer.y * 0.2;

    this.coreGroup.rotation.y = THREE.MathUtils.lerp(this.coreGroup.rotation.y, targetRotY, 0.06);
    this.coreGroup.rotation.x = THREE.MathUtils.lerp(this.coreGroup.rotation.x, targetRotX, 0.06);

    // Responsive core horizontal offset
    const isDesktop = this.width > 900;
    const desiredCoreX = isDesktop ? 1.55 * (1 - this.worksVisibility * 1.45) : 0;
    this.coreGroup.position.x = THREE.MathUtils.lerp(this.coreGroup.position.x, desiredCoreX, 0.05);
    const coreScale = THREE.MathUtils.lerp(1.0, 0.68, this.worksVisibility);
    this.coreGroup.scale.setScalar(coreScale);

    // Cage & Gyroscope Rings
    this.cageMesh.rotation.y = -elapsed * 0.12;
    this.cageMesh.rotation.z = elapsed * 0.08;

    this.rings.forEach((ring) => {
      ring.rotation.z += ring.userData.speed * 0.012;
    });

    // Skill Constellation Animation
    const spreadRadiusScale = 0.72 + this.skillsSpread * 0.42;
    this.skillNodes.forEach((node, idx) => {
      const { baseAngle, radius, yOffset } = node.nodeGroup.userData;
      const orbAngle = baseAngle + elapsed * 0.12;
      const r = radius * spreadRadiusScale;
      const nx = Math.cos(orbAngle) * r;
      const nz = Math.sin(orbAngle) * r;
      const ny = yOffset + Math.sin(elapsed * 1.1 + idx) * 0.15;

      node.nodeGroup.position.set(nx, ny, nz);
      node.halo.lookAt(this.camera.position);

      const isActive =
        this.activeSkillId === node.skill.id ||
        this.hoveredObject === node.mesh;
      const targetScale = isActive ? 1.75 : 1.0;
      node.mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
      node.mesh.rotation.y = elapsed * 0.9;
      node.mat.emissiveIntensity = THREE.MathUtils.lerp(
        node.mat.emissiveIntensity,
        isActive ? 1.4 : 0.4,
        0.1
      );
      node.lineMat.opacity = THREE.MathUtils.lerp(
        node.lineMat.opacity,
        isActive ? 0.55 : 0.1 + this.skillsSpread * 0.14,
        0.1
      );

      // Update tether vertex
      const posAttr = node.tether.geometry.attributes.position;
      posAttr.setXYZ(1, nx, ny, nz);
      posAttr.needsUpdate = true;
    });

    // Project 3D Holo-Slabs choreography
    if (this.projectsGroup.visible) {
      const stageX = isDesktop ? 1.75 : 0;
      const stageZ = THREE.MathUtils.lerp(-2.5, 1.4, this.worksVisibility);
      this.projectsGroup.position.x = THREE.MathUtils.lerp(this.projectsGroup.position.x, stageX, 0.06);
      this.projectsGroup.position.z = THREE.MathUtils.lerp(this.projectsGroup.position.z, stageZ, 0.06);

      this.holoSlabs.forEach((slab, idx) => {
        const offsetFromFocus = idx - this.focusedProjectIndex;
        const targetX = offsetFromFocus * 1.15;
        const targetY = -offsetFromFocus * 0.42 + Math.sin(elapsed * 1.2 + idx) * 0.06;
        const targetZ = -Math.abs(offsetFromFocus) * 1.35 + (offsetFromFocus === 0 ? 0.6 : 0);
        const targetRotY = -0.22 + offsetFromFocus * 0.14 + this.smoothPointer.x * 0.08;
        const targetRotX = this.smoothPointer.y * 0.06;

        slab.mesh.position.x = THREE.MathUtils.lerp(slab.mesh.position.x, targetX, 0.08);
        slab.mesh.position.y = THREE.MathUtils.lerp(slab.mesh.position.y, targetY, 0.08);
        slab.mesh.position.z = THREE.MathUtils.lerp(slab.mesh.position.z, targetZ, 0.08);
        slab.mesh.rotation.y = THREE.MathUtils.lerp(slab.mesh.rotation.y, targetRotY, 0.08);
        slab.mesh.rotation.x = THREE.MathUtils.lerp(slab.mesh.rotation.x, targetRotX, 0.08);

        const isHovered = this.hoveredObject === slab.mesh;
        slab.targetHover = isHovered ? 1 : 0;
        slab.uniforms.uTime.value = elapsed;
        slab.uniforms.uHover.value = THREE.MathUtils.lerp(slab.uniforms.uHover.value, slab.targetHover, 0.1);
        slab.uniforms.uFocus.value = THREE.MathUtils.lerp(slab.uniforms.uFocus.value, slab.targetFocus, 0.1);
      });
    }

    // Gentle camera tracking + parallax
    const parallaxX = this.smoothPointer.x * 0.35;
    const parallaxY = this.smoothPointer.y * 0.22;
    const desiredCamPos = new THREE.Vector3(
      this.cameraTargetPos.x + parallaxX,
      this.cameraTargetPos.y + parallaxY,
      this.cameraTargetPos.z
    );
    this.camera.position.lerp(desiredCamPos, 0.055);
    this.currentLookAt.lerp(this.cameraTargetLook, 0.055);
    this.camera.lookAt(this.currentLookAt);

    // Slow particle rotation
    this.particles.rotation.y = elapsed * 0.025;

    this._handleRaycastHover();
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    cancelAnimationFrame(this._rafId);
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('click', this._onClick);
    this.renderer.dispose();
  }
}
