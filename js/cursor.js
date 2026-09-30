/**
 * Apex Growth Media - Interactive Marketing Icon Custom Cursor & Lerp Aura
 * Features:
 * - Dynamic SVG Marketing Pointer Icon (Growth arrow + target graphic)
 * - Smooth Lerp (Linear Interpolation) Trailing Aura Ring
 * - Interactive element hover state detection with dynamic badge labels
 * - Click burst particle effects (+ROAS, +Leads, Growth sparkles)
 * - Automatic disable on mobile touch screens
 */

(function () {
  // Mobile / Touch check
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;
  let isPointerActive = false;

  // Create Custom Cursor DOM Structure
  document.addEventListener("DOMContentLoaded", () => {
    initCursorDOM();
    bindCursorEvents();
    requestAnimationFrame(renderCursorFrame);
  });

  function initCursorDOM() {
    const container = document.createElement("div");
    container.className = "custom-cursor-container";

    // Pointer Icon (Exact Marketing Arrow + Target Graphic SVG)
    const pointer = document.createElement("div");
    pointer.className = "cursor-pointer-icon";
    pointer.id = "customCursorPointer";
    pointer.innerHTML = `
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mktGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#013AE3" />
            <stop offset="100%" stop-color="#E53935" />
          </linearGradient>
          <filter id="mktGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#013AE3" flood-opacity="0.5"/>
          </filter>
        </defs>
        <!-- Marketing Growth Cursor Arrow -->
        <path d="M 4 4 L 14 32 L 18 19 L 32 14 Z" fill="url(#mktGrad)" stroke="#FFFFFF" stroke-width="2.2" filter="url(#mktGlow)" stroke-linejoin="round"/>
        <!-- Upward Graph Trend Line -->
        <polyline points="9 11 15 16 19 13 25 18" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Target Arrow Tip -->
        <polygon points="22 15 26 18 26 14" fill="#FFFFFF"/>
      </svg>
    `;

    // Lerp Trailing Aura Ring
    const follower = document.createElement("div");
    follower.className = "cursor-follower-ring";
    follower.id = "customCursorFollower";

    const badge = document.createElement("span");
    badge.className = "cursor-badge-text";
    badge.id = "customCursorBadge";
    badge.textContent = "GROW";
    follower.appendChild(badge);

    container.appendChild(pointer);
    container.appendChild(follower);
    document.body.appendChild(container);
  }

  function bindCursorEvents() {
    const pointerEl = document.getElementById("customCursorPointer");
    const followerEl = document.getElementById("customCursorFollower");
    const badgeEl = document.getElementById("customCursorBadge");

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isPointerActive) {
        isPointerActive = true;
        followerX = mouseX;
        followerY = mouseY;
      }

      // Move sharp pointer immediately
      if (pointerEl) {
        pointerEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    });

    // Handle mouse enter/leave window
    document.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover-cta", "cursor-hover-link", "cursor-hover-card", "cursor-hover-media", "cursor-hover-input");
    });

    // Mouse Down Click Ripple & Sparkle Nodes
    window.addEventListener("mousedown", (e) => {
      document.body.classList.add("cursor-clicking");
      triggerClickRipple(e.clientX, e.clientY);
      triggerMarketingSparkles(e.clientX, e.clientY);
    });

    window.addEventListener("mouseup", () => {
      document.body.classList.remove("cursor-clicking");
    });

    // Delegate hover target inspection
    document.addEventListener("mouseover", (e) => {
      const target = e.target;
      if (!target) return;

      const ctaBtn = target.closest(".btn-cta, .btn-open-audit, #heroPrimaryCta, #navPrimaryCta");
      const link = target.closest("a, button, .nav-link, .timeframe-btn, .filter-btn");
      const card = target.closest(".service-card, .package-card, .project-card, .case-study-card, .dashboard-card, .calculator-card");
      const media = target.closest(".reel-card, .reel-play-btn, video, iframe");
      const input = target.closest("input, select, textarea");

      // Reset hover classes
      document.body.classList.remove("cursor-hover-cta", "cursor-hover-link", "cursor-hover-card", "cursor-hover-media", "cursor-hover-input");

      if (ctaBtn) {
        document.body.classList.add("cursor-hover-cta");
        if (badgeEl) badgeEl.textContent = "GROW 🚀";
      } else if (media) {
        document.body.classList.add("cursor-hover-media");
        if (badgeEl) badgeEl.textContent = "PLAY ▶";
      } else if (card) {
        document.body.classList.add("cursor-hover-card");
        if (badgeEl) badgeEl.textContent = "VIEW ROI 📈";
      } else if (link) {
        document.body.classList.add("cursor-hover-link");
        if (badgeEl) badgeEl.textContent = "CLICK ✨";
      } else if (input) {
        document.body.classList.add("cursor-hover-input");
        if (badgeEl) badgeEl.textContent = "TYPE ✍";
      }
    });
  }

  // Smooth Animation Frame Lerp Loop
  function renderCursorFrame() {
    const followerEl = document.getElementById("customCursorFollower");

    if (followerEl && isPointerActive) {
      // Lerp (smooth spring physics formula)
      const ease = 0.16;
      followerX += (mouseX - followerX) * ease;
      followerY += (mouseY - followerY) * ease;

      followerEl.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    }

    requestAnimationFrame(renderCursorFrame);
  }

  // Marketing Click Burst Ripple Effect
  function triggerClickRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.className = "cursor-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
    }, 600);
  }

  // Marketing Growth Burst Sparkles (+ROAS, +Leads, Growth symbols)
  function triggerMarketingSparkles(x, y) {
    const labels = ["+340% ROAS", "+LEADS", "GROWTH", "ROI ↑", "PROFIT"];
    const count = 3;

    for (let i = 0; i < count; i++) {
      const node = document.createElement("div");
      node.className = "cursor-sparkle-node";
      node.textContent = labels[Math.floor(Math.random() * labels.length)];

      const angle = (Math.PI * 2 / count) * i + Math.random() * 0.5;
      const dist = 40 + Math.random() * 40;
      const dx = `${Math.cos(angle) * dist}px`;
      const dy = `${Math.sin(angle) * dist}px`;

      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.setProperty("--dx", dx);
      node.style.setProperty("--dy", dy);

      document.body.appendChild(node);

      setTimeout(() => {
        if (node.parentNode) node.parentNode.removeChild(node);
      }, 800);
    }
  }
})();
