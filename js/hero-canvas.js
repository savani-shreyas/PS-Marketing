/**
 * Prime Vibe Event & Shoot - Interactive Performance Network Hero Canvas
 * Renders high-tech connecting growth nodes, glowing campaign signals,
 * and mouse-responsive floating ROI particles behind the Hero Section.
 */

function initHeroNetworkCanvas() {
  const hero = document.getElementById("hero");
  if (!hero) return;

  // Create overlay canvas if not present
  let canvas = document.getElementById("heroBackgroundCanvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "heroBackgroundCanvas";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";
    canvas.style.opacity = "0.75";
    hero.insertBefore(canvas, hero.firstChild);
  }

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }
  resize();
  window.addEventListener("resize", resize);

  // Track Mouse inside Hero
  let mouse = { x: width / 2, y: height / 2, active: false };
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });
  hero.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  // Generate Growth Nodes
  const nodeCount = 38;
  const nodes = [];
  const labels = ["ROAS 5.2X", "Leads +184%", "CPA -32%", "CTR 4.8%", "CVR +42%", "₹25Cr+ ARR", "CAC ↓ 28%"];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.5 + 1.5,
      isAccent: Math.random() < 0.2, // Red accent node
      label: Math.random() < 0.25 ? labels[Math.floor(Math.random() * labels.length)] : null,
      pulse: Math.random() * Math.PI * 2
    });
  }

  // Render Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update & Draw Nodes
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += 0.03;

      // Bounce off boundaries
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      // Mouse attraction shift
      if (mouse.active) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          n.x += dx * 0.015;
          n.y += dy * 0.015;
        }
      }

      // Draw Node Dot
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius + Math.sin(n.pulse) * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = n.isAccent ? "#E53935" : "#013AE3";
      ctx.shadowColor = n.isAccent ? "rgba(229, 57, 53, 0.6)" : "rgba(1, 58, 227, 0.6)";
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Floating Growth Label
      if (n.label) {
        ctx.font = "600 10px 'JetBrains Mono', monospace";
        ctx.fillStyle = n.isAccent ? "rgba(229, 57, 53, 0.75)" : "rgba(1, 58, 227, 0.75)";
        ctx.fillText(n.label, n.x + 8, n.y + 4);
      }

      // Draw Network Connections
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n.x - n2.x;
        const dy = n.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const opacity = (1 - dist / 130) * 0.25;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = n.isAccent || n2.isAccent ? `rgba(229, 57, 53, ${opacity})` : `rgba(1, 58, 227, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initHeroNetworkCanvas, 150);
});
