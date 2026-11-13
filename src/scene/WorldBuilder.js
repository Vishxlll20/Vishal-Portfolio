import * as THREE from 'three';

/**
 * High-contrast architectural typography plaque texture (Midnight Black, Pure White & Lime Green).
 */
function makePlaqueTexture(title, subtitle = '', accent = '#a3e635', bgHex = '#0c0c0f', titleSize = 36) {
  const canvas = document.createElement('canvas');
  canvas.width = 768;
  canvas.height = 384;
  const ctx = canvas.getContext('2d');

  const isLight = bgHex.toLowerCase() === '#ffffff';

  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Crisp architectural border
  ctx.strokeStyle = isLight ? 'rgba(9, 9, 11, 0.16)' : 'rgba(255, 255, 255, 0.16)';
  ctx.lineWidth = 3;
  ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);

  // Lime Green accent bar
  ctx.fillStyle = accent;
  ctx.fillRect(48, 52, 68, 7);

  ctx.fillStyle = isLight ? '#09090b' : '#ffffff';
  ctx.font = `700 ${titleSize}px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';

  const words = title.split(' ');
  let line = '';
  let y = subtitle ? 150 : 185;
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > 660) {
      ctx.fillText(line, 48, y);
      line = w;
      y += titleSize * 1.25;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, 48, y);

  if (subtitle) {
    ctx.fillStyle = isLight ? '#3f6212' : accent;
    ctx.font = '600 25px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
    ctx.fillText(subtitle, 48, y + 62);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/**
 * Midnight Black, Pure White & Lime Green live IDE & telemetry screens.
 */
export function createAnimatedMonitorTexture(mode = 'code') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;

  const draw = (t) => {
    ctx.fillStyle = '#09090b';
    ctx.fillRect(0, 0, 512, 320);

    ctx.fillStyle = '#141418';
    ctx.fillRect(0, 0, 512, 30);
    ['#ffffff', '#a3e635', '#52525b'].forEach((col, i) => {
      ctx.beginPath();
      ctx.arc(18 + i * 16, 15, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();
    });

    if (mode === 'code') {
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '12px ui-monospace, monospace';
      ctx.fillText('lexai-pipeline.ts — Vishal Kumar', 76, 19);

      const lines = [
        { text: 'import { StateGraph } from "@langchain/langgraph";', color: '#a3e635' },
        { text: 'import { Anthropic } from "@anthropic-ai/sdk";', color: '#a3e635' },
        { text: 'const cache = createRedisCluster(env.REDIS);', color: '#ffffff' },
        { text: 'export async function draftLegalBrief(id: string) {', color: '#bef264' },
        { text: '  const refs = await kanoonAPI.verify(id);', color: '#e4e4e7' },
        { text: '  const brief = await claude.messages.create(...);', color: '#ffffff' },
        { text: '  await queue.add("pdf-export", { brief });', color: '#a3e635' },
        { text: '  return { verified: true, latencyMs: 142 };', color: '#bef264' },
        { text: '}', color: '#ffffff' },
      ];

      ctx.font = '13px ui-monospace, monospace';
      const activeLine = Math.floor(t * 1.5) % lines.length;
      lines.forEach((line, idx) => {
        const y = 58 + idx * 24;
        if (idx === activeLine) {
          ctx.fillStyle = 'rgba(163, 230, 53, 0.14)';
          ctx.fillRect(14, y - 14, 484, 20);
        }
        ctx.fillStyle = '#52525b';
        ctx.fillText(String(idx + 1).padStart(2, '0'), 20, y);
        ctx.fillStyle = line.color;
        ctx.fillText(line.text, 46, y);
      });

      ctx.fillStyle = '#141418';
      ctx.fillRect(16, 268, 480, 38);
      ctx.fillStyle = '#a3e635';
      ctx.font = '12px ui-monospace, monospace';
      const dots = '.'.repeat(1 + (Math.floor(t * 2.2) % 3));
      ctx.fillText(`> Build green · 20+ microservices active${dots}`, 26, 291);
    } else {
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '12px ui-monospace, monospace';
      ctx.fillText('Architecture & Real-World Impact', 76, 19);

      for (let i = 0; i < 20; i++) {
        const val = 0.25 + 0.65 * Math.abs(Math.sin(t * 2.0 + i * 0.45));
        const h = val * 115;
        const x = 36 + i * 22;
        const y = 175 - h;
        ctx.fillStyle = i % 3 === 0 ? '#a3e635' : i % 3 === 1 ? '#ffffff' : '#4d7c0f';
        ctx.fillRect(x, y, 14, h);
      }

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 17px system-ui, sans-serif';
      ctx.fillText('1,700+ Users · 99.98% Uptime · 40% Faster Load', 36, 224);

      ctx.fillStyle = '#a3e635';
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText('Tata Steel Foundation · LexAI · PulseWatch · Moodify', 36, 256);

      ctx.fillStyle = '#a1a1aa';
      ctx.fillText('React · Next.js · Node.js · PostgreSQL · Redis · LangChain', 36, 284);
    }

    tex.needsUpdate = true;
  };

  draw(0);
  return { texture: tex, update: draw };
}

function makeArchitecturalTree(x, z, scale = 1, tint = 0x365314) {
  const tree = new THREE.Group();
  tree.position.set(x, 0, z);
  tree.scale.setScalar(scale);

  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.16, 1.4, 10),
    new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.85 })
  );
  trunk.position.y = 0.7;
  trunk.castShadow = true;
  tree.add(trunk);

  const leafMat = new THREE.MeshStandardMaterial({ color: tint, roughness: 0.82 });
  const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.82, 16, 14), leafMat);
  c1.position.set(0, 1.9, 0);
  c1.castShadow = true;

  const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.58, 14, 12), leafMat);
  c2.position.set(-0.42, 1.6, 0.2);
  c2.castShadow = true;

  const c3 = new THREE.Mesh(new THREE.SphereGeometry(0.54, 14, 12), leafMat);
  c3.position.set(0.42, 1.65, -0.16);
  c3.castShadow = true;

  tree.add(c1, c2, c3);
  return tree;
}

function makeStudioLamp(x, z) {
  const post = new THREE.Group();
  post.position.set(x, 0, z);

  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.06, 3.1, 12),
    new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.5 })
  );
  pole.position.y = 1.55;
  pole.castShadow = true;
  post.add(pole);

  const head = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.28, 0.12, 12),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
  );
  head.position.y = 3.12;
  post.add(head);

  const bulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.11, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xa3e635 })
  );
  bulb.position.y = 3.02;
  post.add(bulb);

  return post;
}

function makeArchitecturalMarker(x, z, title, subtitle, bg = '#0c0c0f') {
  const g = new THREE.Group();
  g.position.set(x, 0, z);

  const plinth = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 1.15, 0.32),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55 })
  );
  plinth.position.y = 0.575;
  plinth.castShadow = true;
  g.add(plinth);

  const board = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 1.1, 0.1),
    new THREE.MeshStandardMaterial({
      map: makePlaqueTexture(title, subtitle, '#a3e635', bg, 40),
      roughness: 0.45,
    })
  );
  board.position.y = 1.7;
  board.castShadow = true;
  g.add(board);

  return g;
}

export function buildStoryWorld(scene) {
  const world = new THREE.Group();
  scene.add(world);

  const interactables = [];

  // 1. Midnight Black Ground & Crisp Graphite/White Path
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(180, 90),
    new THREE.MeshStandardMaterial({ color: 0x0a0a0d, roughness: 0.94 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(48, -0.02, -4);
  ground.receiveShadow = true;
  world.add(ground);

  const road = new THREE.Mesh(
    new THREE.BoxGeometry(128, 0.06, 3.6),
    new THREE.MeshStandardMaterial({ color: 0x16161b, roughness: 0.85 })
  );
  road.position.set(48, -0.01, 0);
  road.receiveShadow = true;
  world.add(road);

  // Pure White curbs + Lime centerline markers
  const curbMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
  [-1.86, 1.86].forEach((cz) => {
    const curb = new THREE.Mesh(new THREE.BoxGeometry(128, 0.07, 0.1), curbMat);
    curb.position.set(48, 0.02, cz);
    world.add(curb);
  });

  const limeDashMat = new THREE.MeshBasicMaterial({ color: 0xa3e635 });
  for (let dx = -4; dx <= 96; dx += 4.2) {
    const dash = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.015, 0.07), limeDashMat);
    dash.position.set(dx, 0.022, 0);
    world.add(dash);
  }

  // 2. CHAPTER 1: Origin Marker (x = 0)
  world.add(makeArchitecturalMarker(-1.5, -2.5, 'VISHAL KUMAR', 'JAMSHEDPUR · ORIGIN', '#0c0c0f'));

  // 3. CHAPTER 2: Path to School (x = 5..18)
  world.add(makeArchitecturalMarker(6.5, -2.5, 'SCHOOL BASICS', 'PHYSICS · CHEM · MATHS', '#ffffff'));
  world.add(makeArchitecturalMarker(11.5, 2.5, 'FIRST CODE', 'BASIC PYTHON & JAVA', '#0c0c0f'));

  // Pure White & Midnight Black Schoolhouse with Lime Accent (x = 16.5, z = -4.6)
  const school = new THREE.Group();
  school.position.set(16.5, 0, -4.6);

  const schoolBody = new THREE.Mesh(
    new THREE.BoxGeometry(7.2, 3.5, 3.8),
    new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.65 })
  );
  schoolBody.position.y = 1.75;
  schoolBody.castShadow = true;
  schoolBody.receiveShadow = true;
  school.add(schoolBody);

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(5.5, 1.75, 4),
    new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.72 })
  );
  roof.rotation.y = Math.PI / 4;
  roof.scale.set(1.2, 1, 0.75);
  roof.position.y = 4.35;
  roof.castShadow = true;
  school.add(roof);

  const schoolBanner = new THREE.Mesh(
    new THREE.BoxGeometry(4.2, 1.0, 0.16),
    new THREE.MeshStandardMaterial({
      map: makePlaqueTexture('KASIDIH HIGH SCHOOL', 'PCM · PYTHON, JAVA & DBMS', '#a3e635', '#0c0c0f', 36),
    })
  );
  schoolBanner.position.set(0, 2.95, 1.98);
  school.add(schoolBanner);

  const schoolDoor = new THREE.Mesh(
    new THREE.BoxGeometry(1.1, 1.65, 0.15),
    new THREE.MeshStandardMaterial({ color: 0x09090b })
  );
  schoolDoor.position.set(0, 0.825, 1.9);
  school.add(schoolDoor);

  const winMat = new THREE.MeshBasicMaterial({ color: 0xa3e635 });
  [-2.3, -1.2, 1.2, 2.3].forEach((wx) => {
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.75, 0.1), winMat);
    win.position.set(wx, 1.85, 1.91);
    school.add(win);
  });
  world.add(school);

  // 4. CHAPTER 3: Bicycle Avenue to R.V.S. College (x = 20..44)
  world.add(makeArchitecturalMarker(24.5, -2.5, 'GFG CAMPUS MANTRI', '200+ DSA PROBLEMS', '#0c0c0f'));
  world.add(makeArchitecturalMarker(30.5, 2.5, "GSSoC '26", '25+ OPEN SOURCE PRs', '#ffffff'));
  world.add(makeArchitecturalMarker(36.5, -2.5, 'GLOBAL FINALIST', '50+ COUNTRIES HACKATHON', '#0c0c0f'));

  // Architectural College Campus (x = 43, z = -5.2)
  const college = new THREE.Group();
  college.position.set(43, 0, -5.2);

  const mainWing = new THREE.Mesh(
    new THREE.BoxGeometry(10.6, 5.2, 4.4),
    new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.55 })
  );
  mainWing.position.y = 2.6;
  mainWing.castShadow = true;
  college.add(mainWing);

  const glassFacade = new THREE.Mesh(
    new THREE.BoxGeometry(8.8, 3.4, 0.18),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xa3e635,
      emissiveIntensity: 0.12,
      roughness: 0.25,
    })
  );
  glassFacade.position.set(0, 2.9, 2.2);
  college.add(glassFacade);

  for (let px = -4.2; px <= 4.2; px += 2.1) {
    const pillar = new THREE.Mesh(
      new THREE.BoxGeometry(0.32, 5.2, 0.45),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45 })
    );
    pillar.position.set(px, 2.6, 2.35);
    pillar.castShadow = true;
    college.add(pillar);
  }

  const collegeSign = new THREE.Mesh(
    new THREE.BoxGeometry(6.8, 1.25, 0.22),
    new THREE.MeshStandardMaterial({
      map: makePlaqueTexture(
        'R.V.S. COLLEGE OF ENGG & TECH',
        'B.TECH CSE · 2023 - 2027',
        '#a3e635',
        '#0c0c0f',
        34
      ),
    })
  );
  collegeSign.position.set(0, 5.95, 2.0);
  college.add(collegeSign);
  world.add(college);

  // 5. CHAPTER 4: Midnight & White Developer Studio Desk (x = 60.5, z = -0.4)
  const deskGroup = new THREE.Group();
  deskGroup.position.set(60.5, 0, -0.4);
  deskGroup.rotation.y = -0.52;
  world.add(deskGroup);

  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(6.6, 0.16, 4.8),
    new THREE.MeshStandardMaterial({ color: 0x141418, roughness: 0.75 })
  );
  deck.position.set(0, 0.08, 0.2);
  deck.receiveShadow = true;
  deskGroup.add(deck);

  const deckTrim = new THREE.Mesh(
    new THREE.BoxGeometry(6.66, 0.04, 4.86),
    new THREE.MeshBasicMaterial({ color: 0xa3e635 })
  );
  deckTrim.position.set(0, 0.02, 0.2);
  deskGroup.add(deckTrim);

  const rug = new THREE.Mesh(
    new THREE.BoxGeometry(4.2, 0.03, 3.0),
    new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.95 })
  );
  rug.position.set(0, 0.175, 0.35);
  rug.receiveShadow = true;
  deskGroup.add(rug);

  const deskTop = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 0.1, 1.35),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
  );
  deskTop.position.set(0, 0.92, -0.45);
  deskTop.castShadow = true;
  deskGroup.add(deskTop);

  [
    [-1.45, -1.0],
    [1.45, -1.0],
    [-1.45, 0.1],
    [1.45, 0.1],
  ].forEach(([lx, lz]) => {
    const leg = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.88, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.6 })
    );
    leg.position.set(lx, 0.44, lz);
    deskGroup.add(leg);
  });

  const chairGroup = new THREE.Group();
  chairGroup.position.set(0, 0.16, 0.72);
  const chairBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.38, 0.08, 12),
    new THREE.MeshStandardMaterial({ color: 0x27272a })
  );
  chairBase.position.y = 0.05;
  const chairStem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.42, 10),
    new THREE.MeshStandardMaterial({ color: 0xa3e635 })
  );
  chairStem.position.y = 0.24;
  const chairSeat = new THREE.Mesh(
    new THREE.BoxGeometry(0.62, 0.09, 0.58),
    new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.7 })
  );
  chairSeat.position.y = 0.44;
  const chairBack = new THREE.Mesh(
    new THREE.BoxGeometry(0.56, 0.78, 0.09),
    new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.7 })
  );
  chairBack.position.set(0, 0.85, 0.25);
  chairGroup.add(chairBase, chairStem, chairSeat, chairBack);
  deskGroup.add(chairGroup);

  const leftMonitorTex = createAnimatedMonitorTexture('code');
  const rightMonitorTex = createAnimatedMonitorTexture('metrics');

  const makeMonitor = (x, z, rotY, texObj) => {
    const mon = new THREE.Group();
    mon.position.set(x, 1.48, z);
    mon.rotation.y = rotY;

    const bezel = new THREE.Mesh(
      new THREE.BoxGeometry(1.38, 0.84, 0.06),
      new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.4 })
    );
    mon.add(bezel);

    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.3, 0.76),
      new THREE.MeshBasicMaterial({ map: texObj.texture })
    );
    screen.position.z = 0.035;
    screen.userData = { type: 'monitor' };
    interactables.push(screen);
    mon.add(screen);

    const stand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.05, 0.52, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    stand.position.y = -0.35;
    mon.add(stand);

    deskGroup.add(mon);
  };

  makeMonitor(-0.68, -0.78, 0.16, leftMonitorTex);
  makeMonitor(0.72, -0.75, -0.18, rightMonitorTex);

  const keyboard = new THREE.Mesh(
    new THREE.BoxGeometry(0.68, 0.04, 0.24),
    new THREE.MeshStandardMaterial({
      color: 0x09090b,
      emissive: 0xa3e635,
      emissiveIntensity: 0.35,
    })
  );
  keyboard.position.set(0, 0.99, -0.18);
  deskGroup.add(keyboard);

  const mug = new THREE.Mesh(
    new THREE.CylinderGeometry(0.07, 0.065, 0.15, 14),
    new THREE.MeshStandardMaterial({ color: 0xa3e635, roughness: 0.35 })
  );
  mug.position.set(1.05, 1.05, -0.15);
  deskGroup.add(mug);

  const pot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.08, 0.16, 12),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
  );
  pot.position.set(-1.25, 1.05, -0.2);
  const plantLeaves = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0x65a30d, roughness: 0.75 })
  );
  plantLeaves.position.set(-1.25, 1.2, -0.2);
  deskGroup.add(pot, plantLeaves);

  const steamPuffs = [];
  const steamMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.35,
  });
  for (let s = 0; s < 3; s++) {
    const puff = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 8), steamMat);
    puff.position.set(1.05, 1.18 + s * 0.12, -0.15);
    puff.userData = { offset: s * 0.33 };
    deskGroup.add(puff);
    steamPuffs.push(puff);
  }

  const studioWall = new THREE.Mesh(
    new THREE.BoxGeometry(5.6, 3.2, 0.14),
    new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 })
  );
  studioWall.position.set(0, 1.75, -1.65);
  studioWall.receiveShadow = true;
  deskGroup.add(studioWall);

  const wallFrame = new THREE.Mesh(
    new THREE.BoxGeometry(2.0, 0.95, 0.06),
    new THREE.MeshStandardMaterial({
      map: makePlaqueTexture('SHIP TO REALITY', 'REACT · NODE · AI', '#a3e635', '#ffffff', 40),
      roughness: 0.45,
    })
  );
  wallFrame.position.set(0, 2.55, -1.55);
  deskGroup.add(wallFrame);

  const deskLight = new THREE.PointLight(0xffffff, 5.0, 12);
  deskLight.position.set(0, 2.7, 0.5);
  deskGroup.add(deskLight);

  const skillBadges = [
    { name: 'React / Next.js', pos: [-2.25, 2.65, -0.8] },
    { name: 'Node / Express', pos: [-1.4, 3.45, -1.0] },
    { name: 'TypeScript', pos: [0.0, 3.65, -0.95] },
    { name: 'LangChain / RAG', pos: [1.55, 3.4, -0.95] },
    { name: 'PostgreSQL / Redis', pos: [2.3, 2.6, -0.8] },
  ];

  const floatingBadges = [];
  skillBadges.forEach((b, i) => {
    const badge = new THREE.Mesh(
      new THREE.PlaneGeometry(1.5, 0.62),
      new THREE.MeshBasicMaterial({
        map: makePlaqueTexture(b.name, 'PRODUCTION STACK', '#a3e635', '#0c0c0f', 44),
        side: THREE.DoubleSide,
      })
    );
    badge.position.set(...b.pos);
    badge.userData = { baseY: b.pos[1], phase: i * 1.1 };
    deskGroup.add(badge);
    floatingBadges.push(badge);
  });

  // 6. CHAPTER 5: Project Exhibition Boards (x = 72..89)
  const monolithSpecs = [
    { id: 'tsf-ai', title: 'TATA STEEL AI INTERN', sub: 'EN <-> HI TRANSLATOR', bg: '#0c0c0f', x: 72.5, z: -2.9 },
    { id: 'tsf-sde', title: 'TATA STEEL SDE INTERN', sub: '1,700+ EMPLOYEES', bg: '#ffffff', x: 76.5, z: 2.8 },
    { id: 'lexai', title: 'LEXAI AGENTS', sub: '4 CLAUDE PIPELINES', bg: '#0c0c0f', x: 80.5, z: -2.9 },
    { id: 'pulsewatch', title: 'PULSEWATCH', sub: 'REAL-TIME MONITOR', bg: '#ffffff', x: 84.5, z: 2.8 },
    { id: 'moodify', title: 'MOODIFY AI', sub: 'MEDIAPIPE + GSAP', bg: '#0c0c0f', x: 88.5, z: -2.9 },
  ];

  const monoliths = [];
  monolithSpecs.forEach((m) => {
    const g = new THREE.Group();
    g.position.set(m.x, 0, m.z);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.28, 0.85),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
    );
    base.position.y = 0.14;
    base.castShadow = true;
    g.add(base);

    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(2.7, 3.0, 0.16),
      new THREE.MeshStandardMaterial({
        map: makePlaqueTexture(m.title, m.sub, '#a3e635', m.bg, 44),
        roughness: 0.42,
      })
    );
    slab.position.y = 1.8;
    slab.castShadow = true;
    slab.userData = { type: 'monolith', id: m.id };
    interactables.push(slab);
    g.add(slab);

    world.add(g);
    monoliths.push({ group: g, slab, id: m.id });
  });

  // 7. CHAPTER 6: Centered Finale Horizon Monument at end of path (x = 97.0, z = 0)
  const finaleMonument = new THREE.Group();
  finaleMonument.position.set(97.0, 0, 0.0);
  finaleMonument.rotation.y = -0.18;

  const plinthBase = new THREE.Mesh(
    new THREE.BoxGeometry(5.6, 0.4, 1.4),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
  );
  plinthBase.position.y = 0.2;
  plinthBase.castShadow = true;
  finaleMonument.add(plinthBase);

  [-2.3, 2.3].forEach((px) => {
    const col = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 3.4, 0.4),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
    );
    col.position.set(px, 2.0, 0);
    col.castShadow = true;
    finaleMonument.add(col);
  });

  const billboard = new THREE.Mesh(
    new THREE.BoxGeometry(4.9, 2.5, 0.22),
    new THREE.MeshStandardMaterial({
      map: makePlaqueTexture(
        'OPEN FOR OPPORTUNITIES',
        'Ready to put knowledge into the real world.',
        '#a3e635',
        '#0c0c0f',
        42
      ),
      roughness: 0.4,
    })
  );
  billboard.position.set(0, 2.25, 0);
  billboard.castShadow = true;
  finaleMonument.add(billboard);

  world.add(finaleMonument);

  // Stylized Foliage & Studio Lamps
  const treeCoords = [
    [-3, -3.5, 1.0, 0x365314],
    [3.5, 3.4, 0.9, 0x4d7c0f],
    [9, -3.6, 1.1, 0x3f6212],
    [13.2, -3.4, 0.85, 0x65a30d],
    [22, 3.5, 1.05, 0x365314],
    [27, -3.4, 0.95, 0x4d7c0f],
    [33.5, -3.5, 1.15, 0x3f6212],
    [39, 3.4, 1.0, 0x65a30d],
    [49, -3.6, 1.1, 0x365314],
    [53, 3.5, 0.95, 0x4d7c0f],
    [92.5, 3.6, 1.05, 0x365314],
  ];
  treeCoords.forEach(([tx, tz, sc, tint]) => world.add(makeArchitecturalTree(tx, tz, sc, tint)));

  for (let lx = 2; lx <= 94; lx += 12) {
    world.add(makeStudioLamp(lx, -2.05));
  }

  // Distant Obsidian Horizon Silhouettes
  const skylineMat = new THREE.MeshStandardMaterial({ color: 0x141418, roughness: 0.92 });
  for (let sx = -8; sx <= 105; sx += 7.5) {
    const h = 3.5 + ((Math.abs(sx * 17) % 10) * 0.75);
    const w = 2.8 + (Math.abs(sx * 7) % 3);
    const block = new THREE.Mesh(new THREE.BoxGeometry(w, h, 2.4), skylineMat);
    block.position.set(sx, h * 0.5 - 0.1, -20 - (Math.abs(sx * 3) % 8));
    world.add(block);
  }

  return {
    world,
    deskGroup,
    chairWorldAnchor: new THREE.Vector3(
      60.5 + Math.sin(-0.52) * 0.72,
      0.16,
      -0.4 + Math.cos(-0.52) * 0.72
    ),
    deskRotationY: -0.52,
    interactables,
    monoliths,
    update(elapsed) {
      leftMonitorTex.update(elapsed);
      rightMonitorTex.update(elapsed);
      floatingBadges.forEach((b) => {
        b.position.y = b.userData.baseY + Math.sin(elapsed * 1.3 + b.userData.phase) * 0.08;
      });
      steamPuffs.forEach((p) => {
        const cycle = (elapsed * 0.55 + p.userData.offset) % 1;
        p.position.y = 1.15 + cycle * 0.42;
        p.position.x = 1.05 + Math.sin(elapsed * 2.0 + p.userData.offset * 6) * 0.03;
        p.scale.setScalar(0.7 + cycle * 0.8);
      });
    },
  };
}
