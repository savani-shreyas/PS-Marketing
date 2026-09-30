/**
 * Apex Growth Media - Main Application Logic & Component Renderer
 * Ultra-Modern Design System with Strategic Red CTA placement
 */

document.addEventListener("DOMContentLoaded", () => {
  renderBrandElements();
  renderTrustLogos();
  renderServices();
  renderFunnelProcess();
  renderPackages();
  renderReelsShowcase();
  renderProjects();
  renderCaseStudies();
  renderWhyUsPillars();
  renderResultsCounters();
  renderTestimonials();
  renderCeoSection();
  renderHiringPositions();

  initHeaderBehavior();
  initScrollReveals();
  initModalsAndForms();
  initReelsFilter();
});

/* --- SVG ICON HELPER --- */
function getIconSvg(iconName) {
  const icons = {
    "trending-up": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    "target": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    "zap": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    "video": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
    "share-2": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
    "bar-chart-3": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`,
    "layout": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    "refresh-cw": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
    "shield-check": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    "shopping-bag": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    "database": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    "pie-chart": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
    "crosshair": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`,
    "users": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    "arrow-right": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    "check": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    "play": `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    "star": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  };
  return icons[iconName] || icons["arrow-right"];
}

/* --- RENDER FUNCTIONS --- */
function renderBrandElements() {
  const brandNameEls = document.querySelectorAll(".brand-name");
  brandNameEls.forEach(el => el.textContent = agencyData.brand.name);
}

function renderTrustLogos() {
  const container = document.getElementById("trustLogosContainer");
  if (!container) return;

  container.innerHTML = agencyData.trustLogos.map(logo => `
    <div class="trust-logo-card">
      ${getIconSvg(logo.icon)}
      <span class="trust-logo-name">${logo.name}</span>
    </div>
  `).join("");
}

function renderServices() {
  const container = document.getElementById("servicesContainer");
  if (!container) return;

  container.innerHTML = agencyData.services.map((s, idx) => `
    <div class="service-card reveal reveal-delay-${(idx % 4) + 1}" data-service-id="${s.id}">
      <div class="service-top">
        <div class="service-header-row">
          <span class="service-num">${s.id}</span>
          <span class="service-badge">${s.badge}</span>
        </div>
        <div class="service-icon-wrapper">
          ${getIconSvg(s.icon)}
        </div>
        <h3 class="service-card-title">${s.title}</h3>
        <p class="service-card-desc">${s.description}</p>
      </div>
      <div class="service-footer">
        <span>${s.subtitle}</span>
        <span class="service-arrow">${getIconSvg("arrow-right")}</span>
      </div>
    </div>
  `).join("");
}

function renderFunnelProcess() {
  const container = document.getElementById("funnelContainer");
  if (!container) return;

  container.innerHTML = agencyData.funnelSteps.map(step => `
    <div class="funnel-step-card reveal">
      <span class="funnel-num">STEP ${step.step}</span>
      <h4 class="funnel-title">${step.name}</h4>
      <p class="funnel-desc">${step.desc}</p>
      <span class="funnel-metric-badge">${step.metric}</span>
    </div>
  `).join("");
}

function renderPackages() {
  const container = document.getElementById("packagesContainer");
  if (!container) return;

  container.innerHTML = agencyData.packages.map(pkg => `
    <div class="package-card ${pkg.isPopular ? 'popular' : ''} reveal">
      ${pkg.isPopular ? `<span class="popular-badge">${pkg.ctaBadge}</span>` : ''}
      <div>
        <h3 class="package-name">${pkg.name}</h3>
        <p class="package-target">${pkg.target}</p>
        <div class="package-price">${pkg.price}</div>
        <ul class="package-features">
          ${pkg.features.map(f => `
            <li class="package-feature-item">
              ${getIconSvg("check")}
              <span>${f}</span>
            </li>
          `).join("")}
        </ul>
      </div>
      <!-- Primary CTA uses Strategic Red Accent button style -->
      <button class="btn ${pkg.isPopular ? 'btn-cta' : 'btn-secondary'} btn-open-audit" data-package="${pkg.name}">
        <span>${pkg.ctaText}</span>
        <span class="btn-icon">${getIconSvg("arrow-right")}</span>
      </button>
    </div>
  `).join("");
}

function renderReelsShowcase() {
  const container = document.getElementById("reelsContainer");
  if (!container) return;

  container.innerHTML = agencyData.reels.map(r => `
    <div class="reel-card reveal" data-category="${r.category}">
      <div style="background: ${r.thumbnailBg}; width: 100%; height: 100%;">
        <div class="reel-overlay">
          <div class="reel-top-bar">
            <span class="reel-tag">${r.videoTag}</span>
            <span class="reel-metric-badge">${r.metric}</span>
          </div>
          <div class="reel-play-btn">
            ${getIconSvg("play")}
          </div>
          <div class="reel-bottom">
            <span class="reel-brand">${r.brand}</span>
            <h4 class="reel-title">${r.title}</h4>
            <div class="reel-metrics-row">
              <span>${r.views}</span>
              <span class="text-blue">${r.roas}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = agencyData.projects.map(p => `
    <div class="project-card reveal">
      <div class="project-visual" style="background: ${p.imageBg};">
        <span class="project-industry-badge">${p.industry}</span>
        <span class="project-client-name">${p.client}</span>
      </div>
      <div class="project-content">
        <p class="project-objective">${p.summary}</p>
        <div class="project-metrics-grid">
          ${p.results.map(res => `
            <div class="project-metric-item">
              <div class="project-metric-label">${res.label}</div>
              <div class="project-metric-value">${res.value}</div>
            </div>
          `).join("")}
        </div>
        <button class="btn btn-secondary btn-sm btn-open-audit" style="width: 100%;">
          <span>View Verified Growth</span>
          <span class="btn-icon">${getIconSvg("arrow-right")}</span>
        </button>
      </div>
    </div>
  `).join("");
}

function renderCaseStudies() {
  const container = document.getElementById("caseStudiesContainer");
  if (!container) return;

  container.innerHTML = agencyData.caseStudies.map(cs => `
    <div class="project-card reveal" style="grid-column: span 1;">
      <div class="project-visual" style="background: linear-gradient(135deg, #013AE3, #070C18); padding: 32px;">
        <span class="project-industry-badge">Verified Case Study</span>
        <h3 style="font-size: 1.75rem; font-weight: 800;">${cs.client}</h3>
      </div>
      <div class="project-content">
        <div style="margin-bottom: 16px;">
          <strong style="color: var(--brand-blue); font-size: 0.8125rem; text-transform: uppercase;">Challenge</strong>
          <p style="font-size: 0.875rem; color: var(--text-muted);">${cs.challenge}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <strong style="color: var(--brand-blue); font-size: 0.8125rem; text-transform: uppercase;">Strategy & Execution</strong>
          <p style="font-size: 0.875rem; color: var(--text-muted);">${cs.strategy}</p>
        </div>
        <div class="project-metrics-grid">
          <div class="project-metric-item"><div class="project-metric-label">Leads</div><div class="project-metric-value">${cs.results.leads}</div></div>
          <div class="project-metric-item"><div class="project-metric-label">Cost / Lead</div><div class="project-metric-value">${cs.results.cpl}</div></div>
          <div class="project-metric-item"><div class="project-metric-label">ROAS</div><div class="project-metric-value">${cs.results.roas}</div></div>
          <div class="project-metric-item"><div class="project-metric-label">Pipeline</div><div class="project-metric-value">${cs.results.revenue}</div></div>
        </div>
        <button class="btn btn-cta btn-sm btn-open-audit" style="width: 100%;">
          <span>Read Full Case Study</span>
          <span class="btn-icon">${getIconSvg("arrow-right")}</span>
        </button>
      </div>
    </div>
  `).join("");
}

function renderWhyUsPillars() {
  const container = document.getElementById("whyUsContainer");
  if (!container) return;

  container.innerHTML = agencyData.whyUsPillars.map(w => `
    <div class="why-card reveal">
      <div class="why-icon">${getIconSvg(w.icon)}</div>
      <h3 class="why-title">${w.title}</h3>
      <p class="why-desc">${w.description}</p>
    </div>
  `).join("");
}

function renderResultsCounters() {
  const container = document.getElementById("countersContainer");
  if (!container) return;

  container.innerHTML = agencyData.resultsCounters.map(c => `
    <div class="counter-card reveal">
      <div class="counter-number text-blue" data-target="${c.number}">
        ${c.prefix}${c.number}${c.suffix}
      </div>
      <div class="counter-label">${c.label}</div>
    </div>
  `).join("");
}

function renderTestimonials() {
  const container = document.getElementById("testimonialsContainer");
  if (!container) return;

  const t = agencyData.testimonials[0];
  container.innerHTML = `
    <div class="testimonial-card reveal">
      <div class="testimonial-rating">
        ${Array(t.rating).fill(getIconSvg("star")).join("")}
      </div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author-row">
        <div class="author-info">
          <div class="author-avatar">${t.avatar}</div>
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-title">${t.title}, ${t.company}</div>
          </div>
        </div>
        <span class="testimonial-badge">${t.metricBadge}</span>
      </div>
    </div>
  `;
}

function renderCeoSection() {
  const container = document.getElementById("ceoContainer");
  if (!container) return;

  const ceo = agencyData.ceoProfile;
  container.innerHTML = `
    <div class="ceo-card reveal">
      <div class="ceo-image-side">
        <div class="ceo-avatar-placeholder">AV</div>
        <div>
          <h3 style="font-size: 1.5rem; font-weight: 800;">${ceo.name}</h3>
          <p style="color: var(--brand-blue-light); font-size: 0.875rem;">${ceo.title}</p>
        </div>
      </div>
      <div class="ceo-content-side">
        <h3 class="ceo-name">${ceo.name}</h3>
        <div class="ceo-title">${ceo.title}</div>
        <p class="ceo-quote">"${ceo.quote}"</p>
        <p class="ceo-bio">${ceo.bio}</p>
        <button class="btn btn-cta btn-open-audit">
          <span>Connect With Our CEO</span>
          <span class="btn-icon">${getIconSvg("arrow-right")}</span>
        </button>
      </div>
    </div>
  `;
}

function renderHiringPositions() {
  const container = document.getElementById("positionsContainer");
  if (!container) return;

  const roleIcons = {
    "Performance": "target",
    "Creative": "video",
    "Design & UX": "layout"
  };

  container.innerHTML = agencyData.openPositions.map(pos => `
    <div class="position-card">
      <div class="position-left">
        <div class="position-icon-box">
          ${getIconSvg(roleIcons[pos.department] || "zap")}
        </div>
        <div class="position-info">
          <h3 class="position-role">${pos.role}</h3>
          <div class="position-tags">
            <span class="position-tag dept-tag">${pos.department}</span>
            <span class="position-tag type-tag">${pos.type}</span>
          </div>
        </div>
      </div>
      <button class="position-apply-btn btn-open-audit">
        <span>Apply Now</span>
        <span class="btn-icon">${getIconSvg("arrow-right")}</span>
      </button>
    </div>
  `).join("");
}

/* --- HEADER & NAVIGATION --- */
function initHeaderBehavior() {
  const header = document.getElementById("siteHeader");
  const mobileToggle = document.getElementById("mobileNavToggle");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileBackdrop = document.getElementById("mobileNavBackdrop");

  // Scroll Progress Bar & Header Glass Effect
  const progressBar = document.getElementById("scrollProgressBar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (progressBar) {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = `${scrolled}%`;
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("active");
      mobileBackdrop.classList.toggle("active");
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", () => {
      mobileDrawer.classList.remove("active");
      mobileBackdrop.classList.remove("active");
    });
  }
}

/* --- SCROLL REVEALS --- */
function initScrollReveals() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* --- REELS FILTERING --- */
function initReelsFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;

      document.querySelectorAll(".reel-card").forEach(card => {
        if (category === "All" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* --- MODALS AND FORM HANDLER --- */
function initModalsAndForms() {
  const modalOverlay = document.getElementById("leadModalOverlay");
  const closeBtns = document.querySelectorAll(".modal-close-btn");
  const openAuditBtns = document.querySelectorAll(".btn-open-audit");
  const leadForm = document.getElementById("leadForm");
  const formSuccessState = document.getElementById("formSuccessState");

  openAuditBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedPkg = btn.dataset.package;
      if (selectedPkg) {
        const pkgSelect = document.getElementById("formServiceNeed");
        if (pkgSelect) pkgSelect.value = `Package: ${selectedPkg}`;
      }
      modalOverlay.classList.add("active");
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  });

  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  });

  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = leadForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Processing Audit Request...</span>`;
      }

      setTimeout(() => {
        leadForm.style.display = "none";
        if (formSuccessState) formSuccessState.style.display = "block";
      }, 1200);
    });
  }
}
