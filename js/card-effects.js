/**
 * Apex Growth Media - Modern 3D Card Tilt, Radial Spotlight & Magnetic Buttons
 * Implements interactive micro-animations for cards, packages, services & CTAs
 */

function initCardTiltAndSpotlight() {
  const cards = document.querySelectorAll(
    ".service-card, .package-card, .project-card, .case-study-card, .dashboard-card, .calculator-card, .why-card, .trust-logo-card, .hiring-card, .final-cta-card"
  );

  cards.forEach((card) => {
    // Enable 3D transform space
    card.style.transformStyle = "preserve-3d";
    card.style.transition = "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease";

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-8 deg to +8 deg)
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      // Apply 3D perspective transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;

      // Radial Spotlight Border & Background Glow
      card.style.backgroundImage = `radial-gradient(500px circle at ${x}px ${y}px, rgba(1, 58, 227, 0.07), transparent 60%)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      card.style.backgroundImage = "none";
    });
  });

  // Magnetic Button Hover Physics for primary CTAs
  const magneticBtns = document.querySelectorAll(".btn-cta, .btn-primary, #heroPrimaryCta, #navPrimaryCta");

  magneticBtns.forEach((btn) => {
    btn.style.transition = "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease";

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Pull button slightly towards cursor (magnetic effect)
      btn.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0) scale(1.03)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate3d(0, 0, 0) scale(1)";
    });
  });
}

// Re-init tilt when dynamic content completes rendering
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initCardTiltAndSpotlight, 300);
});
