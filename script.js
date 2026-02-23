// ================================================================
//  SCRIPT.JS — Portfolio Logic & DOM Rendering
//  Reads from data.js and builds the page automatically.
//  You don't need to edit this file.
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Populate personal info ─────────────────────────────────
  const firstName = DATA.name.split(DATA.nameAccent)[0];
  document.getElementById('hero-name').innerHTML =
    `${firstName}<span>${DATA.nameAccent}</span><br>${DATA.name.split(' ')[1]}`;

  document.getElementById('hero-tag').childNodes[1].textContent = ' ' + DATA.tagline;
  document.getElementById('hero-bio').textContent = DATA.bio;
  document.getElementById('photo-badge').textContent = DATA.badge;
  document.getElementById('hero-photo').src = DATA.photo;
  document.getElementById('hero-photo').alt = DATA.name;

  // Page title & footer
  document.title = `${DATA.name} | Java & Spring Boot Developer`;
  document.getElementById('footer-name').textContent = `© ${new Date().getFullYear()} ${DATA.name}. All rights reserved.`;

  // ── 2. Build Skills ───────────────────────────────────────────
  const skillsGrid = document.getElementById('skills-grid');
  DATA.skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.innerHTML = `
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-cat">${skill.category}</div>
      <div class="skill-tags">
        ${skill.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>`;
    skillsGrid.appendChild(card);
  });

  // ── 3. Build Projects ─────────────────────────────────────────
  const projectsGrid = document.getElementById('projects-grid');
  DATA.projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <div class="project-glow"></div>
      <div class="project-header">
        <div class="project-title">${proj.title}</div>
        <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
          <div class="project-meta">${proj.date}</div>
          ${proj.link ? `<a class="project-link" href="${proj.link}" target="_blank">GitHub ↗</a>` : ''}
        </div>
      </div>
      <p class="project-desc">${proj.desc}</p>
      <ul class="project-features">
        ${proj.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
      <div class="project-tech">
        ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>`;
    projectsGrid.appendChild(card);
  });

  // ── 4. Build Education ────────────────────────────────────────
  const eduTimeline = document.getElementById('edu-timeline');
  DATA.education.forEach(edu => {
    const card = document.createElement('div');
    card.className = 'edu-card reveal';
    card.innerHTML = `
      <div class="edu-dot"></div>
      <div class="edu-period">${edu.period}</div>
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-school">${edu.school}</div>
      <div class="edu-score">★ ${edu.score}</div>`;
    eduTimeline.appendChild(card);
  });

  // ── 5. Build Contact ──────────────────────────────────────────
  const contactInfo = document.getElementById('contact-info');
  const emailItem = DATA.contact.find(c => c.type === 'email');
  if (emailItem) {
    document.getElementById('contact-email-btn').href = emailItem.href;
  }

  DATA.contact.forEach(item => {
    const el = item.type === 'text'
      ? document.createElement('div')
      : document.createElement('a');

    el.className = 'contact-item';
    if (item.href) el.href = item.href;
    if (item.type === 'link') el.target = '_blank';

    el.innerHTML = `
      <div class="contact-icon">${item.icon}</div>
      <div>
        <div class="contact-label">${item.label}</div>
        <div class="contact-val">${item.value}</div>
      </div>`;
    contactInfo.appendChild(el);
  });

  // ── 6. Scroll Reveal ─────────────────────────────────────────
  // Re-observe because cards were added dynamically
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting)
        setTimeout(() => e.target.classList.add('visible'), i * 90);
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // ── 7. Active Nav Highlight ───────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => navObs.observe(s));

  // ── 8. Custom Cursor ─────────────────────────────────────────
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .skill-card, .edu-card, .project-card, .tag')) {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.width = ring.style.height = '58px';
      ring.style.opacity = '0.2';
    } else {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width = ring.style.height = '38px';
      ring.style.opacity = '0.45';
    }
  });

  // ── 9. 3D Tilt on Project Cards ───────────────────────────────
  document.addEventListener('mousemove', e => {
    const card = e.target.closest('.project-card');
    if (card) {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-5px)`;
    }
  });
  document.addEventListener('mouseleave', e => {
    const card = e.target.closest?.('.project-card');
    if (card) card.style.transform = '';
  }, true);

});
