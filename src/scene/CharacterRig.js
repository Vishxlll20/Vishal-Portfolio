import * as THREE from 'three';

/**
 * Clean, stylized designer-vinyl 3D character (Awwwards/Spline aesthetic).
 * Smooth sculpted proportions, matte studio materials, zero uncanny photo mapping.
 */
export class CharacterRig {
  constructor() {
    this.group = new THREE.Group();
    this.waveTimer = 0;

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xdfb492, roughness: 0.72 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.8 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.25 });
    const jacketMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.58 });
    const teeMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.75 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x141418, roughness: 0.82 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const soleMat = new THREE.MeshStandardMaterial({ color: 0xa3e635, roughness: 0.6 });
    const packMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.75 });

    // Hips root
    this.hips = new THREE.Group();
    this.hips.position.y = 0.92;
    this.group.add(this.hips);

    const pelvis = new THREE.Mesh(new THREE.SphereGeometry(0.19, 20, 16), pantsMat);
    pelvis.scale.set(1.12, 0.7, 0.84);
    pelvis.castShadow = true;
    this.hips.add(pelvis);

    // Torso (layered charcoal overshirt over alabaster tee)
    this.torso = new THREE.Group();
    this.torso.position.y = 0.06;
    this.hips.add(this.torso);

    const chest = new THREE.Mesh(new THREE.CapsuleGeometry(0.185, 0.28, 12, 24), jacketMat);
    chest.scale.set(1.18, 1.0, 0.78);
    chest.position.y = 0.27;
    chest.castShadow = true;
    this.torso.add(chest);

    // Inner front tee panel
    const teeFront = new THREE.Mesh(new THREE.CapsuleGeometry(0.105, 0.24, 8, 16), teeMat);
    teeFront.scale.set(1.0, 1.0, 0.45);
    teeFront.position.set(0, 0.27, 0.11);
    this.torso.add(teeFront);

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.078, 0.12, 16), skinMat);
    neck.position.y = 0.56;
    this.torso.add(neck);

    // Minimalist backpack
    this.backpack = new THREE.Group();
    this.backpack.position.set(0, 0.3, -0.17);
    const packBody = new THREE.Mesh(new THREE.CapsuleGeometry(0.135, 0.18, 8, 16), packMat);
    packBody.scale.set(1.12, 1.0, 0.68);
    packBody.castShadow = true;
    this.backpack.add(packBody);
    this.torso.add(this.backpack);

    // Stylized Sculpted Head
    this.head = new THREE.Group();
    this.head.position.y = 0.62;
    this.torso.add(this.head);

    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.185, 32, 24), skinMat);
    cranium.scale.set(0.94, 1.08, 0.96);
    cranium.position.y = 0.165;
    cranium.castShadow = true;
    this.head.add(cranium);

    // Clean minimal eyes & brows
    [-1, 1].forEach((side) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.021, 12, 12), eyeMat);
      eye.scale.set(0.9, 1.25, 0.7);
      eye.position.set(side * 0.062, 0.165, 0.168);

      const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.008, 0.036, 4, 8), hairMat);
      brow.rotation.z = Math.PI / 2 - side * 0.08;
      brow.position.set(side * 0.062, 0.205, 0.166);

      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.034, 12, 12), skinMat);
      ear.scale.set(0.55, 1.1, 0.75);
      ear.position.set(side * 0.172, 0.155, -0.01);

      this.head.add(eye, brow, ear);
    });

    // Subtle sculpted nose
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.022, 10, 10), skinMat);
    nose.scale.set(0.85, 1.1, 1.15);
    nose.position.set(0, 0.135, 0.182);
    this.head.add(nose);

    // Sculpted modern hair
    const hairCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.194, 28, 20, 0, Math.PI * 2, 0, Math.PI * 0.56),
      hairMat
    );
    hairCap.scale.set(0.96, 1.08, 1.0);
    hairCap.position.set(0, 0.19, -0.016);
    hairCap.rotation.x = -0.18;
    hairCap.castShadow = true;
    this.head.add(hairCap);

    const frontSweep = new THREE.Mesh(new THREE.CapsuleGeometry(0.056, 0.14, 8, 14), hairMat);
    frontSweep.rotation.z = Math.PI / 2 - 0.1;
    frontSweep.position.set(0, 0.34, 0.072);
    frontSweep.scale.set(1.0, 1.0, 0.85);
    this.head.add(frontSweep);

    const backHair = new THREE.Mesh(new THREE.SphereGeometry(0.175, 20, 16), hairMat);
    backHair.scale.set(0.92, 0.95, 0.72);
    backHair.position.set(0, 0.17, -0.065);
    this.head.add(backHair);

    // Smooth Capsule Arms
    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.245, 0.46, 0);
      this.torso.add(shoulder);

      const shoulderCap = new THREE.Mesh(new THREE.SphereGeometry(0.066, 14, 14), jacketMat);
      shoulder.add(shoulderCap);

      const upperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.17, 8, 14), jacketMat);
      upperArm.position.y = -0.12;
      upperArm.castShadow = true;
      shoulder.add(upperArm);

      const elbow = new THREE.Group();
      elbow.position.y = -0.24;
      shoulder.add(elbow);

      const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.048, 0.16, 8, 14), jacketMat);
      forearm.position.y = -0.11;
      forearm.castShadow = true;
      elbow.add(forearm);

      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.046, 12, 12), skinMat);
      hand.scale.set(0.85, 1.15, 0.75);
      hand.position.y = -0.23;
      elbow.add(hand);

      return { shoulder, elbow };
    };

    const leftArm = makeArm(-1);
    const rightArm = makeArm(1);
    this.leftShoulder = leftArm.shoulder;
    this.leftElbow = leftArm.elbow;
    this.rightShoulder = rightArm.shoulder;
    this.rightElbow = rightArm.elbow;

    // Smooth Capsule Legs + Sneakers
    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.105, -0.04, 0);
      this.hips.add(hip);

      const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.074, 0.26, 8, 16), pantsMat);
      thigh.position.y = -0.19;
      thigh.castShadow = true;
      hip.add(thigh);

      const knee = new THREE.Group();
      knee.position.y = -0.4;
      hip.add(knee);

      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.063, 0.26, 8, 16), pantsMat);
      shin.position.y = -0.19;
      shin.castShadow = true;
      knee.add(shin);

      const shoeGroup = new THREE.Group();
      shoeGroup.position.set(0, -0.42, 0.04);
      const shoeUpper = new THREE.Mesh(new THREE.CapsuleGeometry(0.058, 0.11, 8, 14), shoeMat);
      shoeUpper.rotation.x = Math.PI / 2;
      shoeUpper.scale.set(1.05, 1.0, 0.78);
      shoeUpper.castShadow = true;

      const shoeSole = new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.028, 0.22), soleMat);
      shoeSole.position.y = -0.035;
      shoeGroup.add(shoeUpper, shoeSole);
      knee.add(shoeGroup);

      return { hip, knee };
    };

    const leftLeg = makeLeg(-1);
    const rightLeg = makeLeg(1);
    this.leftHip = leftLeg.hip;
    this.leftKnee = leftLeg.knee;
    this.rightHip = rightLeg.hip;
    this.rightKnee = rightLeg.knee;
  }

  triggerWave() {
    this.waveTimer = 1.8;
  }

  update(state, elapsed, stridePhase, dt = 0.016) {
    if (this.waveTimer > 0) this.waveTimer = Math.max(0, this.waveTimer - dt);

    let targetHipsY = 0.92;
    let targetTorsoX = 0;
    let targetHeadY = 0;
    let targetHeadX = 0;
    let lShoulderX = 0;
    let lShoulderZ = 0.08;
    let lElbowX = -0.16;
    let rShoulderX = 0;
    let rShoulderZ = -0.08;
    let rElbowX = -0.16;
    let lHipX = 0;
    let lKneeX = 0;
    let rHipX = 0;
    let rKneeX = 0;
    let backpackVisible = true;

    if (state === 'idle') {
      targetHipsY = 0.92 + Math.sin(elapsed * 2.0) * 0.012;
      targetHeadY = Math.sin(elapsed * 0.85) * 0.14;
      lShoulderX = Math.sin(elapsed * 1.4) * 0.04;
      rShoulderX = -Math.sin(elapsed * 1.4) * 0.04;
    } else if (state === 'walk') {
      const s = Math.sin(stridePhase);
      const c = Math.cos(stridePhase);
      targetHipsY = 0.92 + Math.abs(c) * 0.05;
      targetTorsoX = 0.08;
      lHipX = s * 0.6;
      rHipX = -s * 0.6;
      lKneeX = Math.max(0, -c) * 0.52;
      rKneeX = Math.max(0, c) * 0.52;
      lShoulderX = -s * 0.48;
      rShoulderX = s * 0.48;
      lElbowX = -0.32;
      rElbowX = -0.32;
    } else if (state === 'cycle') {
      targetHipsY = 0.98;
      targetTorsoX = 0.3;
      targetHeadX = -0.2;
      lShoulderX = -0.86;
      rShoulderX = -0.86;
      lShoulderZ = 0.12;
      rShoulderZ = -0.12;
      lElbowX = -0.24;
      rElbowX = -0.24;
      const pL = Math.sin(stridePhase);
      const pR = Math.sin(stridePhase + Math.PI);
      lHipX = -0.82 + pL * 0.4;
      rHipX = -0.82 + pR * 0.4;
      lKneeX = 0.92 - Math.cos(stridePhase) * 0.4;
      rKneeX = 0.92 - Math.cos(stridePhase + Math.PI) * 0.4;
    } else if (state === 'code') {
      backpackVisible = false;
      targetHipsY = 0.62;
      targetTorsoX = 0.14;
      targetHeadY = Math.sin(elapsed * 0.65) * 0.12;
      targetHeadX = 0.07;
      lHipX = -1.45;
      rHipX = -1.45;
      lKneeX = 1.45;
      rKneeX = 1.45;
      lShoulderX = -0.6;
      rShoulderX = -0.6;
      lShoulderZ = -0.05;
      rShoulderZ = 0.05;
      lElbowX = -0.92 + Math.sin(elapsed * 15.0) * 0.1;
      rElbowX = -0.92 + Math.cos(elapsed * 17.0) * 0.1;
    }

    if (this.waveTimer > 0) {
      rShoulderX = -2.35;
      rShoulderZ = -0.3 + Math.sin(elapsed * 13.0) * 0.24;
      rElbowX = -0.4;
    }

    this.backpack.visible = backpackVisible;

    const rate = 0.14;
    this.hips.position.y = THREE.MathUtils.lerp(this.hips.position.y, targetHipsY, rate);
    this.torso.rotation.x = THREE.MathUtils.lerp(this.torso.rotation.x, targetTorsoX, rate);
    this.head.rotation.y = THREE.MathUtils.lerp(this.head.rotation.y, targetHeadY, rate);
    this.head.rotation.x = THREE.MathUtils.lerp(this.head.rotation.x, targetHeadX, rate);

    this.leftShoulder.rotation.x = THREE.MathUtils.lerp(this.leftShoulder.rotation.x, lShoulderX, rate);
    this.leftShoulder.rotation.z = THREE.MathUtils.lerp(this.leftShoulder.rotation.z, lShoulderZ, rate);
    this.leftElbow.rotation.x = THREE.MathUtils.lerp(this.leftElbow.rotation.x, lElbowX, rate);

    this.rightShoulder.rotation.x = THREE.MathUtils.lerp(this.rightShoulder.rotation.x, rShoulderX, rate);
    this.rightShoulder.rotation.z = THREE.MathUtils.lerp(this.rightShoulder.rotation.z, rShoulderZ, rate);
    this.rightElbow.rotation.x = THREE.MathUtils.lerp(this.rightElbow.rotation.x, rElbowX, rate);

    this.leftHip.rotation.x = THREE.MathUtils.lerp(this.leftHip.rotation.x, lHipX, rate);
    this.leftKnee.rotation.x = THREE.MathUtils.lerp(this.leftKnee.rotation.x, lKneeX, rate);
    this.rightHip.rotation.x = THREE.MathUtils.lerp(this.rightHip.rotation.x, rHipX, rate);
    this.rightKnee.rotation.x = THREE.MathUtils.lerp(this.rightKnee.rotation.x, rKneeX, rate);
  }
}
