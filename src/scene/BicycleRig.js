import * as THREE from 'three';

/**
 * 3D Bicycle with spinning spoked wheels and pedal crank.
 * Local forward direction is +Z, matching CharacterRig.
 */
export class BicycleRig {
  constructor() {
    this.group = new THREE.Group();
    this.wheelRadius = 0.34;

    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.25,
      roughness: 0.35,
    });
    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0xa3e635,
      metalness: 0.35,
      roughness: 0.35,
    });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.85 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.65, roughness: 0.25 });
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.7 });

    const makeWheel = (zPos) => {
      const wheel = new THREE.Group();
      wheel.position.set(0, this.wheelRadius, zPos);

      // Tire oriented in YZ plane (rolling along Z)
      const tire = new THREE.Mesh(new THREE.TorusGeometry(this.wheelRadius, 0.04, 12, 32), tireMat);
      tire.rotation.y = Math.PI / 2;
      tire.castShadow = true;
      wheel.add(tire);

      const rim = new THREE.Mesh(new THREE.TorusGeometry(this.wheelRadius - 0.04, 0.015, 8, 28), rimMat);
      rim.rotation.y = Math.PI / 2;
      wheel.add(rim);

      // Hub
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.1, 12), darkMetal);
      hub.rotation.z = Math.PI / 2;
      wheel.add(hub);

      // Spokes
      for (let i = 0; i < 6; i++) {
        const spoke = new THREE.Mesh(
          new THREE.CylinderGeometry(0.006, 0.006, (this.wheelRadius - 0.04) * 2, 6),
          rimMat
        );
        spoke.rotation.x = (i / 6) * Math.PI;
        wheel.add(spoke);
      }

      this.group.add(wheel);
      return wheel;
    };

    this.rearWheel = makeWheel(-0.56);
    this.frontWheel = makeWheel(0.56);

    const addTube = (p1, p2, radius = 0.024, mat = frameMat) => {
      const start = new THREE.Vector3(...p1);
      const end = new THREE.Vector3(...p2);
      const dir = new THREE.Vector3().subVectors(end, start);
      const len = dir.length();
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 10), mat);
      mesh.position.copy(start).addScaledVector(dir, 0.5);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      mesh.castShadow = true;
      this.group.add(mesh);
    };

    // Diamond frame
    addTube([0, 0.34, -0.56], [0, 0.36, -0.05], 0.02); // Chainstay
    addTube([0, 0.34, -0.56], [0, 0.78, -0.18], 0.02); // Seatstay
    addTube([0, 0.36, -0.05], [0, 0.82, -0.2], 0.025); // Seat tube
    addTube([0, 0.36, -0.05], [0, 0.76, 0.38], 0.026); // Down tube
    addTube([0, 0.78, -0.18], [0, 0.82, 0.36], 0.024); // Top tube
    addTube([0, 0.86, 0.34], [0, 0.34, 0.56], 0.024, darkMetal); // Front fork

    // Saddle
    const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.26), seatMat);
    saddle.position.set(0, 0.9, -0.22);
    this.group.add(saddle);

    // Handlebar stem & bars
    addTube([0, 0.82, 0.36], [0, 0.98, 0.32], 0.02, darkMetal);
    const bars = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.52, 10), darkMetal);
    bars.rotation.z = Math.PI / 2;
    bars.position.set(0, 0.99, 0.32);
    this.group.add(bars);

    // Grips
    const gripL = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.11, 10), frameMat);
    gripL.rotation.z = Math.PI / 2;
    gripL.position.set(-0.24, 0.99, 0.32);
    const gripR = gripL.clone();
    gripR.position.x = 0.24;
    this.group.add(gripL, gripR);

    // Pedal crank
    this.crank = new THREE.Group();
    this.crank.position.set(0, 0.36, -0.05);
    const chainring = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 16), darkMetal);
    chainring.rotation.z = Math.PI / 2;
    this.crank.add(chainring);

    const pedalBar = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.025, 0.025), rimMat);
    this.crank.add(pedalBar);
    this.group.add(this.crank);
  }

  /**
   * Spin wheels & crank by wheel rotation angle.
   */
  setWheelAngle(angle) {
    this.frontWheel.rotation.x = angle;
    this.rearWheel.rotation.x = angle;
    this.crank.rotation.x = angle * 1.35;
  }
}
