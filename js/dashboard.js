/**
 * Interactive Performance Dashboard Canvas Chart & Timeframe Handler
 * Renders high-performance ad data visualization for Hero Section
 */

const dashboardDatasets = {
  "30D": {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    spend: [45000, 92000, 160000, 240000],
    leads: [24, 58, 112, 184],
    roas: "4.8X",
    cpl: "₹312",
    revenue: "₹11.5L"
  },
  "7D": {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    spend: [8000, 12000, 15000, 18000, 22000, 28000, 35000],
    leads: [6, 11, 14, 19, 23, 31, 38],
    roas: "5.2X",
    cpl: "₹295",
    revenue: "₹3.1L"
  },
  "Q3": {
    labels: ["Jul", "Aug", "Sep"],
    spend: [180000, 420000, 750000],
    leads: [140, 380, 690],
    roas: "5.6X",
    cpl: "₹280",
    revenue: "₹42.0L"
  }
};

let currentChartTimeframe = "30D";

function initHeroDashboardChart() {
  const canvas = document.getElementById("heroChartCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  
  // High DPI Canvas Scaling
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  drawChart(ctx, rect.width, rect.height, currentChartTimeframe);

  // Timeframe Button Listeners
  const timeframeBtns = document.querySelectorAll(".timeframe-btn");
  timeframeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      timeframeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentChartTimeframe = btn.dataset.tf;
      
      // Update Metrics displayed in boxes
      updateDashboardMetricValues(currentChartTimeframe);
      
      // Re-draw Canvas
      drawChart(ctx, rect.width, rect.height, currentChartTimeframe);
    });
  });

  window.addEventListener("resize", () => {
    const newRect = canvas.getBoundingClientRect();
    canvas.width = newRect.width * dpr;
    canvas.height = newRect.height * dpr;
    ctx.scale(dpr, dpr);
    drawChart(ctx, newRect.width, newRect.height, currentChartTimeframe);
  });
}

function updateDashboardMetricValues(tf) {
  const data = dashboardDatasets[tf];
  if (!data) return;

  const spendEl = document.getElementById("dashSpendVal");
  const leadsEl = document.getElementById("dashLeadsVal");
  const cplEl = document.getElementById("dashCplVal");
  const roasEl = document.getElementById("dashRoasVal");

  if (spendEl) spendEl.textContent = tf === "30D" ? "₹2.4L" : (tf === "7D" ? "₹35K" : "₹7.5L");
  if (leadsEl) leadsEl.textContent = tf === "30D" ? "+184%" : (tf === "7D" ? "+142%" : "+290%");
  if (cplEl) cplEl.textContent = data.cpl;
  if (roasEl) roasEl.textContent = data.roas;
}

function drawChart(ctx, width, height, tf) {
  ctx.clearRect(0, 0, width, height);

  const data = dashboardDatasets[tf];
  const spendData = data.spend;
  const maxVal = Math.max(...spendData) * 1.2;
  const padding = 24;
  const chartW = width - padding * 2;
  const chartH = height - padding * 2;

  // Draw Subtle Horizontal Grid Lines
  ctx.strokeStyle = "#F1F5F9";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 3; i++) {
    const y = padding + (chartH / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  // Calculate Points
  const points = spendData.map((val, idx) => {
    const x = padding + (chartW / (spendData.length - 1)) * idx;
    const y = height - padding - (val / maxVal) * chartH;
    return { x, y };
  });

  // Draw Area Gradient under Chart
  const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
  gradient.addColorStop(0, "rgba(1, 58, 227, 0.25)");
  gradient.addColorStop(1, "rgba(1, 58, 227, 0.0)");

  ctx.beginPath();
  ctx.moveTo(points[0].x, height - padding);
  points.forEach(pt => ctx.lineTo(pt.x, pt.y));
  ctx.lineTo(points[points.length - 1].x, height - padding);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw Smooth Curve Line (Brand Blue)
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.strokeStyle = "#013AE3";
  ctx.lineWidth = 3.5;
  ctx.stroke();

  // Draw Interactive Pulse Data Points
  points.forEach((pt, idx) => {
    // Outer Glow Ring
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(1, 58, 227, 0.4)";
    ctx.shadowBlur = 8;
    ctx.fill();

    // Inner Dot (Red Accent on Peak, Blue elsewhere)
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = idx === points.length - 1 ? "#E53935" : "#013AE3";
    ctx.fill();
    ctx.shadowBlur = 0;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initHeroDashboardChart, 100);
});
