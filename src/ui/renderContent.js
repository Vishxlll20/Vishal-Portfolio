export function renderPortfolioUI(data, getScene) {
  // Brand & Hero text
  document.getElementById('brand-monogram').textContent = data.brand.monogram;
  document.getElementById('brand-name').textContent = data.brand.name;
  document.getElementById('availability-text').textContent = data.brand.availability;
  document.getElementById('hero-eyebrow').textContent = data.hero.eyebrow;
  document.getElementById('hero-line-1').textContent = data.hero.headlineLine1;
  document.getElementById('hero-line-2').textContent = data.hero.headlineLine2;
  document.getElementById('hero-subheadline').textContent = data.hero.subheadline;
  document.getElementById('hero-cta-primary').textContent = data.hero.primaryCta;
  document.getElementById('hero-cta-secondary').textContent = data.hero.secondaryCta;

  // Shader Color Presets in Hero HUD
  const presetContainer = document.getElementById('preset-switcher');
  presetContainer.innerHTML = '';
  data.presets.forEach((preset, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `preset-pill ${idx === 0 ? 'is-active' : ''}`;
    btn.dataset.presetId = preset.id;
    btn.innerHTML = `<span class="preset-dot" style="background:${preset.accentHex}"></span>${preset.label}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-pill').forEach((p) => p.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.documentElement.style.setProperty('--accent', preset.accentHex);
      const scene = getScene();
      if (scene) scene.setPreset(preset);
    });
    presetContainer.appendChild(btn);
  });

  // About Section
  document.getElementById('about-eyebrow').textContent = data.about.eyebrow;
  document.getElementById('about-title').textContent = data.about.title;
  document.getElementById('about-desc').textContent = data.about.description;

  const statsContainer = document.getElementById('about-stats');
  statsContainer.innerHTML = data.about.stats
    .map(
      (s) => `
      <div class="stat-card" data-reveal>
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `
    )
    .join('');

  // Interactive Skills Grid synced with 3D Constellation Nodes
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = '';
  data.skills.forEach((skill) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'skill-card interactive-card';
    card.dataset.skillId = skill.id;
    card.setAttribute('data-reveal', '');
    card.innerHTML = `
      <div class="skill-card-top">
        <span class="skill-category">${skill.category}</span>
        <span class="skill-level">${skill.level}</span>
      </div>
      <h3 class="skill-name">${skill.name}</h3>
      <p class="skill-summary">${skill.summary}</p>
    `;

    card.addEventListener('pointerenter', () => {
      const scene = getScene();
      if (scene) scene.highlightSkill(skill.id);
    });
    card.addEventListener('pointerleave', () => {
      const scene = getScene();
      if (scene) scene.highlightSkill(null);
    });
    card.addEventListener('click', () => {
      const scene = getScene();
      if (scene) {
        scene.highlightSkill(skill.id);
        scene.triggerPulse();
      }
      document.querySelectorAll('.skill-card').forEach((c) => c.classList.remove('is-selected'));
      card.classList.add('is-selected');
    });

    skillsGrid.appendChild(card);
  });

  // Selected Works Interactive List synced with 3D Holo-Slabs
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = '';
  data.projects.forEach((project, idx) => {
    const row = document.createElement('article');
    row.className = `project-row interactive-card ${idx === 0 ? 'is-focused' : ''}`;
    row.dataset.projectId = project.id;
    row.setAttribute('data-reveal', '');
    row.innerHTML = `
      <div class="project-row-head">
        <span class="project-index">${project.index}</span>
        <span class="project-meta">${project.client} · ${project.year}</span>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-summary">${project.summary}</p>
      <div class="project-tags">
        ${project.stack.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="project-row-footer">
        <span class="project-category" style="color:${project.accent}">${project.category}</span>
        <button type="button" class="project-open-btn" data-open-project="${project.id}">
          Inspect Case Study <span aria-hidden="true">→</span>
        </button>
      </div>
    `;

    const focusThisProject = () => {
      document.querySelectorAll('.project-row').forEach((r) => r.classList.remove('is-focused'));
      row.classList.add('is-focused');
      const scene = getScene();
      if (scene) scene.focusProject(project.id);
    };

    row.addEventListener('pointerenter', focusThisProject);
    row.addEventListener('click', (e) => {
      if (e.target.closest('[data-open-project]')) {
        openProjectModal(project);
      } else {
        focusThisProject();
      }
    });

    projectsList.appendChild(row);
  });

  // WebGL Lab Controls
  const distortionSlider = document.getElementById('lab-distortion');
  const distortionVal = document.getElementById('lab-distortion-val');
  const turbulenceSlider = document.getElementById('lab-turbulence');
  const turbulenceVal = document.getElementById('lab-turbulence-val');
  const wireframeToggle = document.getElementById('lab-wireframe');
  const orbitToggle = document.getElementById('lab-orbit');
  const pulseBtn = document.getElementById('lab-pulse-btn');

  distortionSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    distortionVal.textContent = v.toFixed(2);
    const scene = getScene();
    if (scene) scene.setDistortion(v);
  });

  turbulenceSlider.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    turbulenceVal.textContent = v.toFixed(2);
    const scene = getScene();
    if (scene) scene.setTurbulence(v);
  });

  wireframeToggle.addEventListener('change', (e) => {
    const scene = getScene();
    if (scene) scene.setWireframe(e.target.checked);
  });

  orbitToggle.addEventListener('change', (e) => {
    const scene = getScene();
    if (scene) scene.setAutoOrbit(e.target.checked);
  });

  pulseBtn.addEventListener('click', () => {
    const scene = getScene();
    if (scene) scene.triggerPulse();
  });

  // Contact & Socials
  const emailDisplay = document.getElementById('contact-email-display');
  emailDisplay.textContent = data.brand.email;

  document.getElementById('copy-email-btn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(data.brand.email);
      showToast(`Copied ${data.brand.email} to clipboard`);
    } catch {
      showToast(`Email: ${data.brand.email}`);
    }
  });

  const socialsList = document.getElementById('socials-list');
  socialsList.innerHTML = data.socials
    .map(
      (s) => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" class="social-link">${s.label} ↗</a>`
    )
    .join('');

  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} ${data.brand.name} · Built with Three.js, GLSL, GSAP & Lenis.`;

  // Contact Form Demo Handler
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const sender = formData.get('name') || 'there';
    showToast(`Transmission received, ${sender}. I'll respond shortly.`);
    const scene = getScene();
    if (scene) scene.triggerPulse();
    contactForm.reset();
  });

  // Modal Close handlers
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  closeBtn.addEventListener('click', closeProjectModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeProjectModal();
    }
  });

  return {
    openProjectById(projectId) {
      const proj = data.projects.find((p) => p.id === projectId);
      if (proj) openProjectModal(proj);
    },
    highlightSkillCard(skillId) {
      document.querySelectorAll('.skill-card').forEach((card) => {
        card.classList.toggle('is-hovered', card.dataset.skillId === skillId);
      });
    },
  };
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-index').textContent = `CASE STUDY // ${project.index} · ${project.year}`;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-client').textContent = `${project.client} — ${project.category}`;
  document.getElementById('modal-summary').textContent = project.summary;

  document.getElementById('modal-metrics').innerHTML = project.metrics
    .map((m) => `<span class="modal-metric-pill" style="border-color:${project.accent}66">${m}</span>`)
    .join('');

  document.getElementById('modal-highlights').innerHTML = project.highlights
    .map((h) => `<li>${h}</li>`)
    .join('');

  document.getElementById('modal-stack').innerHTML = project.stack
    .map((s) => `<span class="tech-tag">${s}</span>`)
    .join('');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3200);
}
