/**
 * main.js — Renders all dynamic content from data/content.js
 * and handles theme toggle, contact form and scroll animations.
 */

// ── RENDER HELPERS ────────────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

// ── THEME ─────────────────────────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const btn = $('themeBtn');
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  btn.textContent = isDark ? '🌙' : '☀️';
}

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
function sendEmail(e) {
  e.preventDefault();
  const name    = $('senderName').value.trim();
  const email   = $('senderEmail').value.trim();
  const subject = $('subject').value.trim();
  const message = $('message').value.trim();
  const body    = (name ? 'From: ' + name + (email ? ' (' + email + ')' : '') + '\n\n' : '') + message;
  window.location.href = 'mailto:' + CONTENT.links.email
    + '?subject=' + encodeURIComponent(subject || 'Message from portfolio')
    + '&body='    + encodeURIComponent(body);
}

// ── META ──────────────────────────────────────────────────────────────────────
function renderMeta() {
  const { meta, links } = CONTENT;
  document.title = meta.title;

  // Nav logo
  const logo = document.querySelector('.nav-logo');
  if (logo) logo.textContent = meta.name[0] + ' ' + meta.name[1];

  // Hero
  $('heroTag').textContent   = meta.tag;
  $('heroTitle').innerHTML   = meta.name.map(n => `${n}<br>`).join('').replace(/<br>$/, '.');
  $('heroRole').textContent  = meta.role;
  $('heroDesc').textContent  = meta.heroDesc;

  // CV link
  const cvLink = $('cvLink');
  if (cvLink) cvLink.href = links.cv;

  // Social links
  const gh = $('linkGH'); if (gh) gh.href = links.github;
  const li = $('linkLI'); if (li) li.href = links.linkedin;
  const em = $('linkEM'); if (em) em.href = 'mailto:' + links.email;

  // Footer social (contact section)
  const ghC = $('contactGH'); if (ghC) ghC.href = links.github;
  const liC = $('contactLI'); if (liC) liC.href = links.linkedin;
  const emC = $('contactEM'); if (emC) emC.href = 'mailto:' + links.email;
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function renderAbout() {
  const { about } = CONTENT;
  const textEl = $('aboutText');
  if (!textEl) return;
  textEl.innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');

  const statsEl = $('aboutStats');
  if (!statsEl) return;
  statsEl.innerHTML = about.stats.map((s, i) => `
    <div class="floating-badge badge-${i + 1}">
      <span class="badge-num">${s.num}</span>${s.label}
    </div>`).join('');
}

// ── SOFT SKILLS ───────────────────────────────────────────────────────────────
function renderSoftSkills() {
  const grid = $('softGrid');
  if (!grid) return;
  grid.innerHTML = CONTENT.softSkills.map(block => `
    <div class="soft-block">
      <div class="soft-block-header">
        <div class="soft-icon ${block.color}">${block.icon}</div>
        <div class="soft-block-title">${block.title}</div>
      </div>
      <ul class="soft-list">
        ${block.items.map(item => `
          <li>
            <span class="soft-dot"></span>
            <div><strong>${item.name}</strong> — ${item.desc}</div>
          </li>`).join('')}
      </ul>
    </div>`).join('');
}

// ── HARD SKILLS ───────────────────────────────────────────────────────────────
function renderHardSkills() {
  const grid = $('hardGrid');
  if (!grid) return;
  grid.innerHTML = CONTENT.hardSkills.map(skill => `
    <div class="skill-card">
      <div class="soft-icon ${skill.color}">${skill.icon}</div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-desc">${skill.desc}</div>
      <div class="skill-tags">
        ${skill.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>`).join('');
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
function renderExperience() {
  const list = $('expList');
  if (!list) return;
  list.innerHTML = CONTENT.experience.map(job => `
    <div class="exp-item">
      <div class="exp-date">
        ${job.dates}<br>
        ${job.current ? '<span class="exp-current">Current</span>' : ''}
      </div>
      <div class="exp-body">
        <div class="exp-role">${job.role}</div>
        <div class="exp-company">${job.company}</div>
        <div class="exp-desc">${job.desc}</div>
      </div>
    </div>`).join('');
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function renderProjects() {
  const grid = $('projectsGrid');
  if (!grid) return;
  const colors = ['pt-1','pt-2','pt-3','pt-4'];
  grid.innerHTML = CONTENT.projects.map((p, i) => `
    <div class="project-card">
      <div class="project-thumb ${colors[i % colors.length]}">
        <span class="project-num">${p.num}</span>
        ${p.featured ? '<span class="project-tag-feat">Featured</span>' : ''}
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-footer">
          <div class="project-stack">
            ${p.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>`).join('');
}

// ── EDUCATION & CERTS ─────────────────────────────────────────────────────────
function renderEducation() {
  const { education, certifications } = CONTENT;

  const eduEl = $('educationCard');
  if (eduEl) {
    eduEl.innerHTML = `
      <div class="edu-degree">${education.degree}</div>
      <div class="edu-school">${education.school}</div>
      <ul class="edu-points">
        ${education.points.map(p => `<li>${p}</li>`).join('')}
      </ul>`;
  }

  const certsEl = $('certsList');
  if (certsEl) {
    certsEl.innerHTML = certifications.map(c => `
      <div class="cert-item">
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
        <div class="cert-date">${c.date}</div>
      </div>`).join('');
  }
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function renderContact() {
  const { contact } = CONTENT;
  const h = $('contactHeading'); if (h) h.innerHTML = contact.heading;
  const s = $('contactSub');     if (s) s.textContent = contact.subtext;
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-card, .soft-block, .project-card, .exp-item, .cert-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMeta();
  renderAbout();
  renderSoftSkills();
  renderHardSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderContact();
  initScrollAnimations();
});
