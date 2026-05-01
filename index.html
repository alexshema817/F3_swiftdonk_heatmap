<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Swift Donkey</title>
<link rel="icon" type="image/png" href="/images/f3_favicon.png">
<link rel="apple-touch-icon" href="/images/f3_favicon.png">
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#ff4d00">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Swift Donkey">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<style>
  :root {
    --bg: #0a0a0a;
    --surface: #111;
    --border: #222;
    --accent: #ff4d00;
    --accent2: #ffaa00;
    --hot: #ff2200;
    --warm: #ff6600;
    --cool: #0066ff;
    --text: #e8e8e8;
    --muted: #555;
    --mono: 'Space Mono', monospace;
    --display: 'Bebas Neue', cursive;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--mono);
    height: 100vh;
    height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 300px 1fr;
    grid-template-areas:
      "header header"
      "sidebar map"
      "footer footer";
    overflow: hidden;
  }

  /* ── HEADER ── */
  header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 24px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    z-index: 100;
  }

  .logo {
    font-family: var(--display);
    font-size: 1.8rem;
    letter-spacing: 0.08em;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-text { line-height: 1; }
  .logo-sub {
    font-family: var(--mono);
    font-size: 0.5rem;
    letter-spacing: 0.25em;
    color: var(--muted);
    margin-top: 2px;
  }

  .header-stats { display: flex; gap: 28px; }

  .stat { text-align: right; }
  .stat-val {
    font-family: var(--display);
    font-size: 1.5rem;
    color: var(--accent);
    line-height: 1;
  }
  .stat-label {
    font-size: 0.55rem;
    color: var(--muted);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-top: 2px;
  }

  /* ── SIDEBAR ── */
  aside {
    grid-area: sidebar;
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* Loading bar at top of sidebar */
  .load-bar {
    height: 2px;
    background: var(--border);
    flex-shrink: 0;
    overflow: hidden;
  }
  .load-bar-inner {
    height: 100%;
    background: var(--accent);
    width: 0%;
    transition: width 0.3s ease;
  }

  .section-title {
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 8px 14px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-count {
    background: var(--border);
    color: var(--muted);
    font-size: 0.5rem;
    padding: 1px 5px;
    border-radius: 8px;
  }

  .file-list {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }

  .file-item {
    display: flex;
    align-items: center;
    padding: 8px 14px;
    border-bottom: 1px solid var(--border);
    gap: 8px;
    font-size: 0.65rem;
    animation: fadeIn 0.25s ease;
    cursor: default;
  }

  .file-item:hover { background: rgba(255,255,255,0.02); }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(-6px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .file-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .file-name {
    flex: 1;
    color: var(--text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .file-dist {
    color: var(--muted);
    font-size: 0.55rem;
    flex-shrink: 0;
  }

  /* ── LEGEND ── */
  .legend {
    padding: 10px 14px;
    border-top: 1px solid var(--border);
    flex-shrink: 0;
  }
  .legend-title {
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .legend-bar {
    height: 7px;
    border-radius: 2px;
    background: linear-gradient(to right, var(--cool), var(--warm), var(--hot));
    margin-bottom: 4px;
  }
  .legend-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.55rem;
    color: var(--muted);
  }

  /* ── CONTROLS ── */
  .controls {
    padding: 10px 14px;
    border-top: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;
  }

  .control-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .control-label {
    font-size: 0.55rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    width: 56px;
    flex-shrink: 0;
  }

  input[type=range] {
    -webkit-appearance: none;
    flex: 1;
    height: 2px;
    background: var(--border);
    outline: none;
    border-radius: 1px;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 11px; height: 11px;
    border-radius: 50%;
    background: var(--accent);
    cursor: pointer;
  }

  .btn {
    background: var(--accent);
    color: #fff;
    border: none;
    padding: 7px 14px;
    font-family: var(--display);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.15s, transform 0.1s;
    width: 100%;
  }
  .btn:hover { background: #ff6622; }
  .btn:active { transform: scale(0.98); }

  /* ── MAP ── */
  #map { grid-area: map; z-index: 1; position: relative; }

  /* map stays in normal light mode */
  .leaflet-control-zoom a {
    background: var(--surface) !important;
    color: var(--text) !important;
    border-color: var(--border) !important;
  }

  /* ── EMPTY STATE ── */
  .empty-state {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
    z-index: 10;
  }
  .empty-icon { font-size: 2.5rem; opacity: 0.12; margin-bottom: 10px; }
  .empty-text {
    font-family: var(--display);
    font-size: 1.6rem;
    letter-spacing: 0.1em;
    opacity: 0.12;
  }
  .empty-sub {
    font-size: 0.6rem;
    color: var(--muted);
    opacity: 0.5;
    margin-top: 4px;
    letter-spacing: 0.15em;
  }

  /* ── FOOTER ── */
  footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 24px;
    background: var(--surface);
    border-top: 1px solid var(--border);
    font-size: 0.55rem;
    color: var(--muted);
    letter-spacing: 0.1em;
  }

  .status { display: flex; align-items: center; gap: 6px; }
  .status-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--accent2);
  }
  .status-dot.loading {
    background: var(--accent);
    animation: blink 0.8s infinite;
  }
  @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.2; } }

  /* ── TOOLTIP ── */
  .map-tooltip {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    font-family: var(--mono);
    font-size: 0.6rem;
    padding: 5px 8px;
    border-radius: 2px;
  }

  /* ── COFFEE POPUP ── */
  .coffee-popup .leaflet-popup-content-wrapper {
    background: #111;
    border: 1px solid #333;
    border-radius: 3px;
    box-shadow: 0 0 16px rgba(255,77,0,0.25);
  }
  .coffee-popup .leaflet-popup-tip {
    background: #111;
  }
  .coffee-popup .leaflet-popup-content {
    margin: 8px 12px;
  }

  /* ── MOBILE DRAWER TOGGLE ── */
  #drawer-toggle {
    display: none;
    position: fixed;
    bottom: 20px; left: 50%;
    transform: translateX(-50%);
    z-index: 500;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 22px;
    font-family: var(--display);
    font-size: 0.95rem;
    letter-spacing: 0.1em;
    box-shadow: 0 4px 20px rgba(255,77,0,0.45);
    cursor: pointer;
    white-space: nowrap;
  }

  /* ── MOBILE (≤ 640px) ── */
  @media (max-width: 640px) {

    body {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header"
        "map"
        "footer";
    }

    header { padding: 8px 14px; }
    .logo svg { width: 28px; height: 28px; }
    .logo { font-size: 1.2rem; gap: 8px; }
    .logo-sub { display: none; }
    .header-stats { gap: 14px; }
    .stat-val { font-size: 1.1rem; }
    .stat-label { font-size: 0.45rem; }

    footer { padding: 4px 14px; font-size: 0.5rem; }
    footer span:last-child { display: none; }

    /* Sidebar = slide-up bottom drawer */
    aside {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      height: 65vh;
      max-height: 65vh;
      border-right: none;
      border-top: 2px solid var(--accent);
      border-radius: 16px 16px 0 0;
      z-index: 400;
      transform: translateY(100%);
      transition: transform 0.35s cubic-bezier(0.32,0.72,0,1);
      box-shadow: 0 -8px 32px rgba(0,0,0,0.5);
    }
    aside.open { transform: translateY(0); }

    /* Drag handle */
    aside::before {
      content: '';
      display: block;
      width: 36px; height: 4px;
      background: var(--border);
      border-radius: 2px;
      margin: 10px auto 4px;
      flex-shrink: 0;
    }

    #drawer-toggle { display: block; }
    #map { grid-area: map; }

    /* Larger touch targets */
    .file-item { padding: 12px 16px; font-size: 0.7rem; }
    .file-dot { width: 9px; height: 9px; }
    input[type=range]::-webkit-slider-thumb { width: 20px; height: 20px; }
    .controls { padding: 12px 16px; }
    .btn { padding: 12px; font-size: 1rem; }
  }
</style>
</head>
<body>

<!-- HEADER -->
<header>
  <div class="logo">
    <!-- Mean donkey SVG -->
    <svg width="42" height="42" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
      <ellipse cx="22" cy="26" rx="13" ry="9" fill="#3a3a3a" stroke="#ff4d00" stroke-width="1"/>
      <path d="M18 20 C16 15 14 12 15 9" stroke="#3a3a3a" stroke-width="6" stroke-linecap="round" fill="none"/>
      <ellipse cx="13" cy="8" rx="5" ry="4" fill="#3a3a3a" stroke="#ff4d00" stroke-width="1"/>
      <ellipse cx="9" cy="9.5" rx="3.5" ry="2.5" fill="#2a2a2a" stroke="#ff4d00" stroke-width="0.8"/>
      <circle cx="7.5" cy="10" r="0.7" fill="#ff4d00"/>
      <circle cx="9.5" cy="10.2" r="0.7" fill="#ff4d00"/>
      <ellipse cx="14.5" cy="6.5" rx="1.6" ry="1" fill="#ff4d00"/>
      <line x1="12.5" y1="5.5" x2="16" y2="6" stroke="#ff6600" stroke-width="0.8"/>
      <polygon points="11,5 10,0 13,1 13,5" fill="#3a3a3a" stroke="#ff4d00" stroke-width="0.8"/>
      <polygon points="14,4.5 14,0.5 17,2 16,5" fill="#3a3a3a" stroke="#ff4d00" stroke-width="0.8"/>
      <polyline points="15,9 16,6 17,9 18,6 19,9 20,7 21,10" stroke="#ff4d00" stroke-width="1.2" fill="none" stroke-linejoin="round"/>
      <line x1="14" y1="33" x2="13" y2="42" stroke="#3a3a3a" stroke-width="3" stroke-linecap="round"/>
      <line x1="18" y1="34" x2="17" y2="43" stroke="#3a3a3a" stroke-width="3" stroke-linecap="round"/>
      <line x1="26" y1="34" x2="27" y2="43" stroke="#3a3a3a" stroke-width="3" stroke-linecap="round"/>
      <line x1="30" y1="33" x2="31" y2="42" stroke="#3a3a3a" stroke-width="3" stroke-linecap="round"/>
      <rect x="12" y="41" width="3" height="2" rx="1" fill="#ff4d00"/>
      <rect x="16" y="42" width="3" height="2" rx="1" fill="#ff4d00"/>
      <rect x="26" y="42" width="3" height="2" rx="1" fill="#ff4d00"/>
      <rect x="30" y="41" width="3" height="2" rx="1" fill="#ff4d00"/>
      <path d="M35 24 C40 20 42 24 38 28" stroke="#3a3a3a" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M38 28 C37 31 35 33 36 35" stroke="#ff4d00" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      <line x1="38" y1="18" x2="44" y2="17" stroke="#ff4d00" stroke-width="0.8" opacity="0.7"/>
      <line x1="39" y1="22" x2="44" y2="22" stroke="#ff4d00" stroke-width="0.8" opacity="0.5"/>
      <line x1="38" y1="26" x2="43" y2="27" stroke="#ff4d00" stroke-width="0.8" opacity="0.3"/>
    </svg>
    <div class="logo-text">
      <div>SWIFT DONKEY</div>
      <div class="logo-sub">RUN HEATMAP</div>
    </div>
  </div>

  <div class="header-stats">
    <div class="stat">
      <div class="stat-val" id="stat-runs">—</div>
      <div class="stat-label">Activities</div>
    </div>
    <div class="stat">
      <div class="stat-val" id="stat-dist">—</div>
      <div class="stat-label">Miles Total</div>
    </div>
    <div class="stat">
      <div class="stat-val" id="stat-segments">—</div>
      <div class="stat-label">Segments</div>
    </div>
  </div>
</header>

<!-- SIDEBAR -->
<aside>
  <div class="load-bar"><div class="load-bar-inner" id="load-bar"></div></div>

  <div class="section-title">
    <span>Map Files</span>
    <span class="section-count" id="file-count">0</span>
  </div>

  <div class="file-list" id="file-list"></div>

  <div class="legend">
    <div class="legend-title">Frequency Heatmap</div>
    <div class="legend-bar"></div>
    <div class="legend-labels">
      <span>Once</span>
      <span>Sometimes</span>
      <span>Often</span>
    </div>
  </div>

  <div class="controls">
    <div class="control-row">
      <span class="control-label">Opacity</span>
      <input type="range" id="opacity-slider" min="10" max="100" value="70">
    </div>
    <div class="control-row">
      <span class="control-label">Weight</span>
      <input type="range" id="weight-slider" min="1" max="8" value="3">
    </div>
    <button class="btn" id="fit-btn">⊞ Fit All Routes</button>
  </div>
</aside>

<!-- MAP -->
<div id="map">
  <div class="empty-state" id="empty-state">
    <div class="empty-icon">🗺️</div>
    <div class="empty-text">Loading Routes...</div>
    <div class="empty-sub">Fetching GPX files from GitHub</div>
  </div>
</div>

<!-- MOBILE DRAWER TOGGLE -->
<button id="drawer-toggle">☰ RUNS</button>

<!-- FOOTER -->
<footer>
  <div class="status">
    <div class="status-dot loading" id="status-dot"></div>
    <span id="status-text">Connecting to GitHub...</span>
  </div>
  <span>alexshema817 / F3_swiftdonk_heatmap / Map Files</span>
</footer>

<script>
// ── Config ─────────────────────────────────────────────────────────────────
const GITHUB_USER   = 'alexshema817';
const GITHUB_REPO   = 'F3_swiftdonk_heatmap';
const GITHUB_FOLDER = 'Map Files';
const RAW_BASE      = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/main/${encodeURIComponent(GITHUB_FOLDER)}`;
const API_BASE      = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${encodeURIComponent(GITHUB_FOLDER)}`;

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  activities: [],
  segmentMap: new Map(),
  heatLayers: [],
};

let opacityVal = 0.7;
let weightVal  = 3;

// ── Map ────────────────────────────────────────────────────────────────────
const map = L.map('map', { zoomControl: true, attributionControl: false })
  .setView([37.2506205, -79.9484836], 15); // Sweet Donkey Coffee, exact coords

// Coffee cup marker at Sweet Donkey Coffee
const coffeeIcon = L.divIcon({
  className: '',
  html: `<div style="
    font-size: 1.6rem;
    filter: drop-shadow(0 0 6px rgba(255,77,0,0.8));
    cursor: default;
    line-height: 1;
  ">☕</div>`,
  iconAnchor: [14, 14],
  popupAnchor: [0, -16],
});

L.marker([37.2506205, -79.9484836], { icon: coffeeIcon })
  .addTo(map)
  .bindPopup(`
    <div style="font-family:'Space Mono',monospace;font-size:0.7rem;line-height:1.6;color:#e8e8e8;background:#111;padding:4px 2px">
      <div style="font-family:'Bebas Neue',cursive;font-size:1.1rem;letter-spacing:0.1em;color:#ff4d00">Sweet Donkey Coffee</div>
      <div style="color:#555">2108 Broadway Ave SW, Roanoke, VA</div>
      <div style="color:#555;font-size:0.6rem;margin-top:2px">Run HQ ☕</div>
    </div>
  `, { className: 'coffee-popup' })
  .openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

// ── Colors ─────────────────────────────────────────────────────────────────
const PALETTE = [
  '#ff4d00','#ff9900','#00ccff','#00ff88',
  '#ff00aa','#aa00ff','#ffff00','#00ffcc',
  '#ff6688','#66ffaa','#ffcc00','#0099ff'
];
function getColor(i) { return PALETTE[i % PALETTE.length]; }

function freqColor(count, max) {
  if (max <= 1) return '#0066ff';
  const t = Math.min((count - 1) / (max - 1), 1);
  const r = Math.round(t * 255);
  const g = Math.round(102 - t * 102);
  const b = Math.round(255 - t * 255);
  return `rgb(${r},${g},${b})`;
}

// ── GPX Parser ─────────────────────────────────────────────────────────────
function parseGPX(text, filename) {
  const doc = new DOMParser().parseFromString(text, 'application/xml');
  const coords = [];
  doc.querySelectorAll('trkpt,rtept').forEach(pt => {
    const lat = parseFloat(pt.getAttribute('lat'));
    const lon = parseFloat(pt.getAttribute('lon'));
    if (!isNaN(lat) && !isNaN(lon)) coords.push([lat, lon]);
  });

  // Try to get date from <time> element inside the track
  let name = '';
  const timeEl = doc.querySelector('trkpt time, trk time, metadata time, time');
  if (timeEl) {
    const d = new Date(timeEl.textContent.trim());
    if (!isNaN(d)) {
      name = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  }
  // Fallback: try to parse date from filename (e.g. 2024-03-15.gpx)
  if (!name) {
    const match = filename.match(/(\d{4}-\d{2}-\d{2})/);
    if (match) {
      const d = new Date(match[1]);
      if (!isNaN(d)) {
        name = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
    }
  }
  // Final fallback: just use filename
  if (!name) name = filename.replace('.gpx','').replace(/_/g,' ');

  return { name, coords };
}

// ── Distance ───────────────────────────────────────────────────────────────
function haversine([a, b], [c, d]) {
  const R = 6371, dL = (c-a)*Math.PI/180, dO = (d-b)*Math.PI/180;
  const x = Math.sin(dL/2)**2 + Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(dO/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
}
function totalDist(coords) {
  let d = 0;
  for (let i = 1; i < coords.length; i++) d += haversine(coords[i-1], coords[i]);
  return d;
}

// ── Segment heatmap ────────────────────────────────────────────────────────
function snap([lat, lon]) {
  return [Math.round(lat * 1000)/1000, Math.round(lon * 1000)/1000];
}
function segKey(a, b) {
  const [a1, a2] = snap(a), [b1, b2] = snap(b);
  const k1 = `${a1},${a2}`, k2 = `${b1},${b2}`;
  return k1 < k2 ? `${k1}|${k2}` : `${k2}|${k1}`;
}
function registerSegments(coords) {
  for (let i = 1; i < coords.length; i++) {
    const k = segKey(coords[i-1], coords[i]);
    state.segmentMap.set(k, (state.segmentMap.get(k) || 0) + 1);
  }
}

// ── Render ─────────────────────────────────────────────────────────────────
function renderAll() {
  state.heatLayers.forEach(l => map.removeLayer(l));
  state.heatLayers = [];

  if (!state.activities.length) return;

  const max = Math.max(...state.segmentMap.values(), 1);

  state.activities.forEach(act => {
    for (let i = 1; i < act.coords.length; i++) {
      const k = segKey(act.coords[i-1], act.coords[i]);
      const count = state.segmentMap.get(k) || 1;
      const pl = L.polyline([act.coords[i-1], act.coords[i]], {
        color: freqColor(count, max),
        weight: weightVal,
        opacity: opacityVal,
      }).addTo(map);
      pl.bindTooltip(
        `<div class="map-tooltip"><b>${count}×</b> on this segment</div>`,
        { sticky: true }
      );
      state.heatLayers.push(pl);
    }
  });

  updateStats(max);
}

function updateStats(max) {
  document.getElementById('stat-runs').textContent     = state.activities.length;
  const totalKm = state.activities.reduce((s,a)=>s+a.dist,0);
  document.getElementById('stat-dist').textContent     = (totalKm * 0.621371).toFixed(1);
  document.getElementById('stat-segments').textContent = state.segmentMap.size;
}

// ── File list UI ───────────────────────────────────────────────────────────
function renderFileList() {
  const el = document.getElementById('file-list');
  document.getElementById('file-count').textContent = state.activities.length;
  el.innerHTML = state.activities.map(a => `
    <div class="file-item">
      <div class="file-dot" style="background:${a.color}"></div>
      <div class="file-name" title="${a.name}">${a.name}</div>
      <div class="file-dist">${a.dist.toFixed(1)}km</div>
    </div>
  `).join('');
}

function fitAll() {
  if (!state.activities.length) return;
  const all = state.activities.flatMap(a => a.coords);
  if (all.length) map.fitBounds(L.latLngBounds(all), { padding: [40,40] });
}

// ── Status helpers ─────────────────────────────────────────────────────────
function setStatus(msg, done = false) {
  document.getElementById('status-text').textContent = msg;
  if (done) {
    document.getElementById('status-dot').classList.remove('loading');
  }
}

function setProgress(pct) {
  document.getElementById('load-bar').style.width = pct + '%';
}

// ── GitHub fetch ───────────────────────────────────────────────────────────
async function fetchGPXList() {
  setStatus('Fetching file list from GitHub...');
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${res.statusText}`);
  const files = await res.json();
  return files.filter(f => f.name.toLowerCase().endsWith('.gpx'));
}

async function fetchAndParse(file, index, total) {
  setStatus(`Loading ${index + 1} / ${total} — ${file.name}`);
  setProgress(((index + 1) / total) * 100);

  const res = await fetch(`${RAW_BASE}/${file.name}`);
  if (!res.ok) throw new Error(`Failed to fetch ${file.name}`);
  const text = await res.text();
  return parseGPX(text, file.name);
}

async function loadAllFromGitHub() {
  try {
    const files = await fetchGPXList();

    if (files.length === 0) {
      setStatus('No GPX files found in /gpx folder yet', true);
      document.getElementById('empty-state').querySelector('.empty-text').textContent = 'No Files Yet';
      document.getElementById('empty-state').querySelector('.empty-sub').textContent  = 'Add GPX files to the /Map Files folder in GitHub';
      return;
    }

    setStatus(`Found ${files.length} GPX file${files.length > 1 ? 's' : ''} — loading...`);

    // Fetch all in parallel batches of 5 to avoid hammering
    const BATCH = 5;
    let loaded = 0;
    for (let i = 0; i < files.length; i += BATCH) {
      const batch = files.slice(i, i + BATCH);
      const results = await Promise.allSettled(
        batch.map((f, bi) => fetchAndParse(f, i + bi, files.length))
      );
      results.forEach((r, bi) => {
        if (r.status === 'fulfilled' && r.value.coords.length >= 2) {
          const { name, coords } = r.value;
          const color = getColor(state.activities.length);
          const dist  = totalDist(coords);
          state.activities.push({ id: `${i+bi}`, name, color, coords, dist });
          registerSegments(coords);
          loaded++;
        }
      });
      // Progressive render after each batch
      renderAll();
      renderFileList();
    }

    setProgress(100);
    document.getElementById('empty-state').style.display = 'none';

    fitAll();
    setStatus(`${loaded} activit${loaded !== 1 ? 'ies' : 'y'} loaded — ${state.segmentMap.size} road segments`, true);

    setTimeout(() => setProgress(0), 800);

  } catch (err) {
    setStatus(`Error: ${err.message}`, true);
    document.getElementById('empty-state').querySelector('.empty-text').textContent = 'Load Error';
    document.getElementById('empty-state').querySelector('.empty-sub').textContent  = err.message;
  }
}

// ── Controls ───────────────────────────────────────────────────────────────
document.getElementById('opacity-slider').addEventListener('input', e => {
  opacityVal = e.target.value / 100;
  state.heatLayers.forEach(l => l.setStyle({ opacity: opacityVal }));
});

document.getElementById('weight-slider').addEventListener('input', e => {
  weightVal = parseInt(e.target.value);
  state.heatLayers.forEach(l => l.setStyle({ weight: weightVal }));
});

document.getElementById('fit-btn').addEventListener('click', fitAll);

// ── Mobile drawer ──────────────────────────────────────────────────────────
const drawerToggle = document.getElementById('drawer-toggle');
const sidebar = document.querySelector('aside');

drawerToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  drawerToggle.textContent = isOpen ? '✕ CLOSE' : '☰ RUNS';
});

// Tap map to close drawer
document.getElementById('map').addEventListener('click', () => {
  sidebar.classList.remove('open');
  drawerToggle.textContent = '☰ RUNS';
});

// ── PWA Service Worker — unregister any cached SW to prevent stale content ──
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(reg => reg.unregister());
  });
}

// ── Boot ───────────────────────────────────────────────────────────────────
loadAllFromGitHub();
</script>
</body>
</html>
