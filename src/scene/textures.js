import * as THREE from 'three';

/**
 * Generates bespoke high-DPI procedural textures for each 3D project Holo-Slab.
 * Guarantees crisp artwork with zero external asset failures.
 */
export function createProjectTexture(project, idx) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Deep obsidian backdrop
  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, '#070910');
  bg.addColorStop(0.55, '#0c111e');
  bg.addColorStop(1, '#07080d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Atmospheric radial glow
  const glow = ctx.createRadialGradient(
    canvas.width * 0.68,
    canvas.height * 0.42,
    30,
    canvas.width * 0.68,
    canvas.height * 0.42,
    460
  );
  glow.addColorStop(0, `${project.accent}55`);
  glow.addColorStop(0.45, `${project.secondaryAccent}22`);
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Architectural blueprint grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.045)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += 64) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Unique generative visual motif per project
  ctx.save();
  const cx = canvas.width * 0.68;
  const cy = canvas.height * 0.48;

  if (idx % 4 === 0) {
    // Precision concentric horology rings & ticks
    for (let r = 60; r <= 230; r += 34) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = r === 162 ? project.accent : 'rgba(255,255,255,0.18)';
      ctx.lineWidth = r === 162 ? 2.5 : 1.2;
      ctx.stroke();
    }
    for (let a = 0; a < 72; a++) {
      const ang = (a / 72) * Math.PI * 2;
      const inner = a % 6 === 0 ? 180 : 196;
      const outer = 212;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * inner, cy + Math.sin(ang) * inner);
      ctx.lineTo(cx + Math.cos(ang) * outer, cy + Math.sin(ang) * outer);
      ctx.strokeStyle = a % 6 === 0 ? project.accent : 'rgba(255,255,255,0.3)';
      ctx.lineWidth = a % 6 === 0 ? 2 : 1;
      ctx.stroke();
    }
  } else if (idx % 4 === 1) {
    // Spectral harmonic wave ribbons
    for (let layer = 0; layer < 8; layer++) {
      ctx.beginPath();
      for (let x = 320; x <= 960; x += 8) {
        const norm = (x - 320) / 640;
        const env = Math.sin(norm * Math.PI);
        const y =
          cy +
          Math.sin(norm * 14 + layer * 0.55) * 95 * env +
          Math.cos(norm * 27 - layer * 0.3) * 28 * env;
        if (x === 320) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = layer % 2 === 0 ? `${project.accent}cc` : `${project.secondaryAccent}99`;
      ctx.lineWidth = 2.2;
      ctx.stroke();
    }
  } else if (idx % 4 === 2) {
    // Elliptical orbital trajectory field
    for (let i = 0; i < 6; i++) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((i * Math.PI) / 6);
      ctx.beginPath();
      ctx.ellipse(0, 0, 220, 72 + i * 12, 0, 0, Math.PI * 2);
      ctx.strokeStyle = i === 2 ? project.accent : 'rgba(255,255,255,0.22)';
      ctx.lineWidth = i === 2 ? 2.5 : 1.2;
      ctx.stroke();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, 42, 0, Math.PI * 2);
    ctx.fillStyle = `${project.accent}44`;
    ctx.fill();
    ctx.strokeStyle = project.accent;
    ctx.lineWidth = 2;
    ctx.stroke();
  } else {
    // Architectural perspective monoliths
    for (let i = 0; i < 5; i++) {
      const w = 68;
      const h = 160 + ((i * 73) % 140);
      const x = 490 + i * 86;
      const y = cy + 120 - h;
      const grad = ctx.createLinearGradient(x, y, x, y + h);
      grad.addColorStop(0, `${project.accent}88`);
      grad.addColorStop(1, 'rgba(255,255,255,0.03)');
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, w, h);
      ctx.strokeStyle = 'rgba(255,255,255,0.24)';
      ctx.strokeRect(x, y, w, h);
    }
  }
  ctx.restore();

  // Editorial HUD Typography inside the slab
  ctx.fillStyle = project.accent;
  ctx.font = '600 22px ui-monospace, SFMono-Regular, Menlo, monospace';
  ctx.fillText(`CASE // ${project.index} — ${project.year}`, 56, 78);

  ctx.fillStyle = '#f4f4f6';
  ctx.font = '700 48px system-ui, -apple-system, sans-serif';
  const words = project.title.split(' ');
  let line = '';
  let lineY = 160;
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > 420) {
      ctx.fillText(line, 56, lineY);
      line = w;
      lineY += 56;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, 56, lineY);

  ctx.fillStyle = 'rgba(244, 244, 246, 0.65)';
  ctx.font = '500 22px system-ui, -apple-system, sans-serif';
  ctx.fillText(`${project.client} · ${project.category}`, 56, lineY + 46);

  // Bottom metric pills
  let pillX = 56;
  const pillY = 548;
  ctx.font = '600 18px ui-monospace, SFMono-Regular, Menlo, monospace';
  project.metrics.forEach((metric) => {
    const tw = ctx.measureText(metric).width + 32;
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.strokeStyle = `${project.accent}77`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY - 26, tw, 38, 19);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#e5e7eb';
    ctx.fillText(metric, pillX + 16, pillY);
    pillX += tw + 14;
  });

  // Outer crisp hairline frame
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
