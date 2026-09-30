/**
 * Interactive ROAS & Revenue Growth Calculator
 * Dynamically computes expected lead volume, revenue projection, net return & ROI
 */

function initRoiCalculator() {
  const budgetInput = document.getElementById("calcBudgetSlider");
  const budgetDisplay = document.getElementById("calcBudgetDisplay");
  const leadsDisplay = document.getElementById("calcLeadsDisplay");
  const revenueDisplay = document.getElementById("calcRevenueDisplay");
  const roasDisplay = document.getElementById("calcRoasDisplay");
  const profitDisplay = document.getElementById("calcProfitDisplay");

  if (!budgetInput) return;

  function formatCurrency(val) {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakh`;
    } else {
      return `₹${val.toLocaleString("en-IN")}`;
    }
  }

  function updateCalculations() {
    const budget = parseFloat(budgetInput.value);
    
    // Performance Benchmark Modeling
    // Assume average CPL around ₹320 (varies slightly by scale)
    const estimatedCpl = Math.max(260, 340 - (budget / 500000) * 20);
    const estimatedLeads = Math.round(budget / estimatedCpl);
    
    // ROAS tier modeling: 3.8X - 5.2X multiplier
    const roasMultiplier = budget > 500000 ? 5.2 : (budget > 200000 ? 4.6 : 4.2);
    const estimatedRevenue = Math.round(budget * roasMultiplier);
    const netProfit = estimatedRevenue - budget;

    // UI Updates
    if (budgetDisplay) budgetDisplay.textContent = formatCurrency(budget);
    if (leadsDisplay) leadsDisplay.textContent = `${estimatedLeads.toLocaleString("en-IN")}+ Leads`;
    if (revenueDisplay) revenueDisplay.textContent = formatCurrency(estimatedRevenue);
    if (roasDisplay) roasDisplay.textContent = `${roasMultiplier.toFixed(1)}X ROAS`;
    if (profitDisplay) profitDisplay.textContent = formatCurrency(netProfit);
  }

  budgetInput.addEventListener("input", updateCalculations);
  updateCalculations();
}

document.addEventListener("DOMContentLoaded", () => {
  initRoiCalculator();
});
