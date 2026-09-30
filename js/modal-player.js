/**
 * Apex Growth Media - Interactive Media Reel & Case Study Modal Player
 * Provides interactive direct-response reel video modal previews
 */

function initReelsModalPlayer() {
  // Create Modal Container in DOM if missing
  let modalOverlay = document.getElementById("reelVideoModalOverlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "reelVideoModalOverlay";
    modalOverlay.className = "modal-overlay";
    modalOverlay.innerHTML = `
      <div class="modal-container reel-modal-box" style="max-width: 860px; padding: 0; overflow: hidden; background: #070C18; border: 1px solid rgba(1, 58, 227, 0.3); box-shadow: 0 25px 60px rgba(0,0,0,0.6);">
        <button class="modal-close-btn" id="closeReelModalBtn" style="color: white; z-index: 10;">✕</button>
        <div style="display: grid; grid-template-columns: 1fr 1fr; @media(max-width:768px){grid-template-columns:1fr;}">
          <!-- Video Preview Screen -->
          <div class="reel-player-screen" style="position: relative; background: #000; min-height: 440px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <div id="reelPlayerBg" style="position: absolute; inset: 0; background-size: cover; background-position: center; filter: brightness(0.6);"></div>
            <div style="position: relative; z-index: 2; text-align: center; padding: 24px;">
              <div id="reelPlayerPlayBtn" style="width: 72px; height: 72px; border-radius: 50%; background: #E53935; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; cursor: pointer; box-shadow: 0 0 30px rgba(229, 57, 53, 0.6); transition: transform 0.2s ease;">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <span id="reelPlayerHookTag" class="section-tag" style="background: rgba(229, 57, 53, 0.2); color: #FF6B6B; border-color: rgba(229, 57, 53, 0.4);">UGC Reel Ad</span>
              <h3 id="reelPlayerTitle" style="color: white; font-size: 1.25rem; font-weight: 800; margin-top: 12px;">Meta High Hook-Rate Creative</h3>
            </div>
            <div class="reel-progress-line" style="position: absolute; bottom: 0; left: 0; width: 100%; height: 4px; background: rgba(255,255,255,0.2);">
              <div id="reelProgressActive" style="width: 45%; height: 100%; background: #E53935;"></div>
            </div>
          </div>
          <!-- Video Details & Conversion Callout -->
          <div style="padding: 36px 30px; display: flex; flex-direction: column; justify-content: space-between; color: white;">
            <div>
              <span class="section-tag" style="margin-bottom: 12px;">Verified Campaign Creative</span>
              <h3 id="reelDetailHeading" style="font-size: 1.5rem; font-weight: 800; margin-bottom: 12px;">Direct-Response UGC Reel</h3>
              <p id="reelDetailDesc" style="color: #94A3B8; font-size: 0.9375rem; line-height: 1.6; margin-bottom: 20px;">
                Scripted and edited specifically to arrest feed scrolling within 2 seconds. Delivers a 4.8X ROAS multiplier on Meta Ads.
              </p>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
                <div style="background: rgba(255,255,255,0.05); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
                  <div style="font-size: 0.75rem; color: #94A3B8;">3s Hook Rate</div>
                  <div id="reelDetailHook" style="font-size: 1.25rem; font-weight: 800; color: #38BDF8;">48.2%</div>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
                  <div style="font-size: 0.75rem; color: #94A3B8;">ROAS Multiplier</div>
                  <div id="reelDetailRoas" style="font-size: 1.25rem; font-weight: 800; color: #FF6B6B;">4.8X ROAS</div>
                </div>
              </div>
            </div>

            <button class="btn btn-cta btn-open-audit" style="width: 100%;">
              <span>Get Similar Creative For Your Brand</span>
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  // Close listeners
  const closeBtn = document.getElementById("closeReelModalBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });

  // Attach click listener to reel cards dynamically
  document.addEventListener("click", (e) => {
    const reelCard = e.target.closest(".reel-card");
    if (!reelCard) return;

    const tag = reelCard.querySelector(".reel-tag")?.textContent || "UGC Reel";
    const metric = reelCard.querySelector(".reel-metric-badge")?.textContent || "4.8X ROAS";
    const title = reelCard.querySelector(".reel-title")?.textContent || "Creative Showcase";
    const desc = reelCard.querySelector(".reel-desc")?.textContent || "High converting direct response creative.";
    const bg = reelCard.querySelector("div[style*='background']")?.style.background || "linear-gradient(135deg, #013AE3, #070C18)";

    const titleEl = document.getElementById("reelPlayerTitle");
    const headingEl = document.getElementById("reelDetailHeading");
    const descEl = document.getElementById("reelDetailDesc");
    const hookTag = document.getElementById("reelPlayerHookTag");
    const roasVal = document.getElementById("reelDetailRoas");
    const bgEl = document.getElementById("reelPlayerBg");

    if (titleEl) titleEl.textContent = title;
    if (headingEl) headingEl.textContent = title;
    if (descEl) descEl.textContent = desc;
    if (hookTag) hookTag.textContent = tag;
    if (roasVal) roasVal.textContent = metric;
    if (bgEl) bgEl.style.background = bg;

    modalOverlay.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initReelsModalPlayer, 300);
});
