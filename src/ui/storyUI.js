function buildProjectLinksHTML(proj) {
  const links = [];
  if (proj.liveUrl) {
    links.push(
      `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-live" style="background:${proj.accent}">Live Demo ↗</a>`
    );
  }
  if (proj.githubUrl) {
    links.push(
      `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-code">GitHub ↗</a>`
    );
  }
  if (proj.frontendUrl) {
    links.push(
      `<a href="${proj.frontendUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-live" style="background:${proj.accent}">Frontend Repo ↗</a>`
    );
  }
  if (proj.backendUrl) {
    links.push(
      `<a href="${proj.backendUrl}" target="_blank" rel="noopener noreferrer" class="action-link action-code">Backend Repo ↗</a>`
    );
  }
  return links.join('');
}

export function renderStoryUI(data, actions) {
  document.getElementById('brand-name').textContent = data.profile.name;
  document.getElementById('brand-role').textContent = data.profile.tagline;

  const counterEl = document.getElementById('chapter-counter');
  const scrollCueEl = document.getElementById('scroll-cue');

  const contactJumpBtn = document.getElementById('contact-jump-btn');
  if (contactJumpBtn) {
    contactJumpBtn.addEventListener('click', () => {
      if (actions.onSelectChapter) actions.onSelectChapter('contact');
    });
  }

  const brandWordmark = document.getElementById('brand-wordmark');
  if (brandWordmark) {
    brandWordmark.addEventListener('click', (e) => {
      e.preventDefault();
      if (actions.onSelectChapter) actions.onSelectChapter('origin');
    });
  }

  // Bottom Chapter Dock
  const scrubber = document.getElementById('chapter-scrubber');
  scrubber.innerHTML = '';
  data.chapters.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `chapter-pill hud-interactive ${idx === 0 ? 'is-active' : ''}`;
    btn.dataset.chapterId = ch.id;
    btn.innerHTML = `<span class="pill-idx">${ch.index}</span><span>${ch.navLabel}</span>`;
    btn.addEventListener('click', () => {
      if (actions.onSelectChapter) actions.onSelectChapter(ch.id);
    });
    scrubber.appendChild(btn);
  });

  // Render Chapters
  const track = document.getElementById('story-track');
  track.innerHTML = '';

  data.chapters.forEach((ch) => {
    const section = document.createElement('section');
    section.id = `chapter-${ch.id}`;
    section.className = 'story-chapter';

    let extraHTML = '';

    if (ch.id === 'college') {
      extraHTML = `
        <div class="achievements-mini">
          ${data.achievements
            .map(
              (a) => `
            <div class="mini-item">
              <div class="mini-meta">${a.org} · ${a.date}</div>
              <div class="mini-title">${a.title}</div>
              <div class="mini-detail">${a.detail}</div>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    } else if (ch.id === 'setup') {
      extraHTML = `
        <div class="skills-clusters">
          ${data.skills
            .map(
              (grp) => `
            <div class="skill-cluster">
              <div class="cluster-label" style="color:${grp.color}">${grp.group}</div>
              <div class="cluster-pills">
                ${grp.items.map((item) => `<span class="stack-pill">${item}</span>`).join('')}
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    } else if (ch.id === 'impact') {
      extraHTML = `
        <div class="impact-tabs" role="tablist">
          <button type="button" class="impact-tab is-active" data-tab="projects">
            Projects (${data.projects.length})
          </button>
          <button type="button" class="impact-tab" data-tab="experiences">
            Internships (${data.experiences.length})
          </button>
        </div>

        <div id="tab-projects" class="impact-list">
          ${data.projects
            .map(
              (proj) => `
            <article class="project-box hud-interactive" data-monolith-id="${proj.id}">
              <div class="project-box-head">
                <span class="project-num" style="color:${proj.accent}">${proj.index}</span>
                <span class="project-date">${proj.period}</span>
              </div>
              <h3 class="project-box-title">${proj.title}</h3>
              <p class="project-box-summary">${proj.summary}</p>
              <div class="project-box-stack">
                ${proj.stack.map((s) => `<span class="stack-pill">${s}</span>`).join('')}
              </div>
              <div class="project-box-actions">
                ${buildProjectLinksHTML(proj)}
                <button
                  type="button"
                  class="action-link action-details"
                  data-inspect-id="${proj.id}"
                >
                  Case Study →
                </button>
              </div>
            </article>
          `
            )
            .join('')}
        </div>

        <div id="tab-experiences" class="impact-list" style="display:none">
          ${data.experiences
            .map(
              (exp) => `
            <article class="project-box hud-interactive" data-monolith-id="${exp.id}">
              <div class="project-box-head">
                <span class="project-num" style="color:${exp.accent}">${exp.company}</span>
                <span class="project-date">${exp.period}</span>
              </div>
              <h3 class="project-box-title">${exp.role}</h3>
              <p class="project-box-summary">${exp.summary}</p>
              <div class="project-box-actions">
                <span class="location-pill">${exp.location}</span>
                <button
                  type="button"
                  class="action-link action-details"
                  data-inspect-id="${exp.id}"
                >
                  Full Impact →
                </button>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
      `;
    } else if (ch.id === 'contact') {
      extraHTML = `
        <div class="contact-card-box">
          <div class="contact-row">
            <span class="contact-label">Email</span>
            <span class="contact-val">${data.profile.email}</span>
            <button type="button" id="copy-email-btn" class="mini-copy-btn hud-interactive">Copy</button>
          </div>
          <div class="contact-row">
            <span class="contact-label">Phone</span>
            <span class="contact-val">${data.profile.phone}</span>
          </div>
          <div class="social-pills">
            ${data.profile.links
              .map(
                (l) =>
                  `<a href="${l.href}" target="_blank" rel="noopener noreferrer" class="social-pill hud-interactive">${l.label} ↗</a>`
              )
              .join('')}
          </div>
          <form id="contact-form" class="quick-form hud-interactive">
            <input name="name" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea name="message" rows="3" placeholder="Share a role, project, or opportunity..." required></textarea>
            <button type="submit" class="btn-primary-story">Send Message</button>
          </form>
        </div>
      `;
    }

    section.innerHTML = `
      <article class="story-panel ${ch.id === 'impact' ? 'story-panel-wide' : ''} hud-interactive">
        <span class="panel-watermark" aria-hidden="true">${ch.index}</span>
        <div class="panel-eyebrow">${ch.eyebrow}</div>
        <h2 class="panel-title">${ch.title}</h2>
        <div class="panel-subtitle">${ch.subtitle}</div>
        <p class="panel-desc">${ch.description}</p>
        ${
          ch.highlights && ch.highlights.length > 0
            ? `<div class="panel-highlights">${ch.highlights
                .map((h) => `<span class="highlight-chip">${h}</span>`)
                .join('')}</div>`
            : ''
        }
        ${extraHTML}
      </article>
    `;

    track.appendChild(section);
  });

  // Tab switching inside Chapter 5
  document.querySelectorAll('.impact-tab').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.impact-tab').forEach((t) => t.classList.remove('is-active'));
      tabBtn.classList.add('is-active');
      const target = tabBtn.dataset.tab;
      document.getElementById('tab-projects').style.display = target === 'projects' ? 'flex' : 'none';
      document.getElementById('tab-experiences').style.display =
        target === 'experiences' ? 'flex' : 'none';
    });
  });

  // Wire Auto-Play
  const autoBtn = document.getElementById('autoplay-btn');
  if (autoBtn && actions.onToggleAutoPlay) {
    autoBtn.addEventListener('click', actions.onToggleAutoPlay);
  }

  // Hover highlight monolith + open modal
  document.querySelectorAll('[data-monolith-id]').forEach((box) => {
    box.addEventListener('pointerenter', () => {
      if (actions.onFocusMonolith) actions.onFocusMonolith(box.dataset.monolithId);
    });
  });

  document.querySelectorAll('[data-inspect-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openDetailModal(data, btn.dataset.inspectId);
    });
  });

  // Copy Email & Form
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(data.profile.email);
        showToast(`Copied ${data.profile.email}`);
      } catch {
        showToast(data.profile.email);
      }
    });
  }

    const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const fd = new FormData(form);
      const payload = {
        access_key: '75ef98ae-0fac-4299-aa04-a8316e34f09b',
        subject: `New Portfolio Inquiry from ${fd.get('name')}`,
        name: fd.get('name'),
        email: fd.get('email'),
        message: fd.get('message'),
      };

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const result = await res.json();

        if (result.success) {
          showToast(`Thanks ${fd.get('name') || ''}! Message sent to ${data.profile.name}.`);
          form.reset();
        } else {
          showToast(result.message || 'Could not send message. Please try again.');
        }
      } catch {
        showToast('Network error. Please email vishalk785032@gmail.com directly.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
  // Modal close handlers
  const modal = document.getElementById('detail-modal');
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  return {
    updateActiveChapter(progress) {
      let activeIdx = 0;
      const thresholds = [0, 0.12, 0.32, 0.56, 0.74, 0.9];
      thresholds.forEach((th, idx) => {
        if (progress >= th) activeIdx = idx;
      });
      document.querySelectorAll('.chapter-pill').forEach((pill, idx) => {
        pill.classList.toggle('is-active', idx === activeIdx);
      });
      if (counterEl) {
        counterEl.textContent = `${String(activeIdx + 1).padStart(2, '0')} / 06`;
      }
      if (scrollCueEl) {
        scrollCueEl.classList.toggle('is-hidden', progress > 0.035);
      }
    },
    openModalById(id) {
      openDetailModal(data, id);
    },
  };
}

function openDetailModal(data, id) {
  const modal = document.getElementById('detail-modal');
  const exp = data.experiences.find((e) => e.id === id);
  const proj = data.projects.find((p) => p.id === id);
  const linksEl = document.getElementById('modal-links');

  if (exp) {
    document.getElementById('modal-kicker').textContent = `INTERNSHIP // ${exp.period}`;
    document.getElementById('modal-title').textContent = exp.role;
    document.getElementById('modal-sub').textContent = `${exp.company} — ${exp.location}`;
    document.getElementById('modal-summary').textContent = exp.summary;
    document.getElementById('modal-metrics').innerHTML = '';
    document.getElementById('modal-list').innerHTML = exp.points
      .map((pt) => `<li>${pt}</li>`)
      .join('');
    document.getElementById('modal-stack').innerHTML = '';
    linksEl.innerHTML = '';
  } else if (proj) {
    document.getElementById('modal-kicker').textContent = `PROJECT ${proj.index} // ${proj.period}`;
    document.getElementById('modal-title').textContent = proj.title;
    document.getElementById('modal-sub').textContent = 'Engineering Architecture & Outcomes';
    document.getElementById('modal-summary').textContent = proj.summary;
    document.getElementById('modal-metrics').innerHTML = proj.metrics
      .map((m) => `<span class="modal-pill">${m}</span>`)
      .join('');
    document.getElementById('modal-list').innerHTML = proj.highlights
      .map((h) => `<li>${h}</li>`)
      .join('');
    document.getElementById('modal-stack').innerHTML = proj.stack
      .map((s) => `<span class="stack-pill">${s}</span>`)
      .join('');
    linksEl.innerHTML = buildProjectLinksHTML(proj);
  } else {
    return;
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('detail-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast-notification');
  el.textContent = msg;
  el.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3000);
}
