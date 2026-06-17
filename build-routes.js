// Build step: parse every map_files/*.gpx, simplify the geometry, and emit a
// single compact routes.json. The browser then loads ONE small JSON file
// instead of fetching + XML-parsing ~70 large GPX files (was ~51 MB).
// Runs automatically on Netlify (see netlify.toml).
const fs = require('fs');
const path = require('path');

const DIR  = path.join(__dirname, 'map_files');
const EPS  = 0.00003; // Douglas-Peucker tolerance in degrees (~3 m) — "light"
const PREC = 5;       // coordinate decimals kept (~1.1 m)

// Ramer–Douglas–Peucker. Planar approximation is fine at city scale.
function rdp(pts, eps) {
  if (pts.length < 3) return pts;
  const [ax, ay] = pts[0];
  const [bx, by] = pts[pts.length - 1];
  const dx = bx - ax, dy = by - ay;
  const len2 = dx * dx + dy * dy;
  let maxD = -1, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i];
    let t = len2 ? ((px - ax) * dx + (py - ay) * dy) / len2 : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const cx = ax + t * dx, cy = ay + t * dy;
    const d = Math.hypot(px - cx, py - cy);
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (maxD > eps) {
    const left  = rdp(pts.slice(0, idx + 1), eps);
    const right = rdp(pts.slice(idx), eps);
    return left.slice(0, -1).concat(right);
  }
  return [pts[0], pts[pts.length - 1]];
}

// Extract lat/lon from <trkpt>/<rtept> tags (attribute order independent).
function parseCoords(xml) {
  const tagRe = /<(?:trkpt|rtept)\b([^>]*)>/g;
  const coords = [];
  let m;
  while ((m = tagRe.exec(xml))) {
    const lat = /\blat="([-\d.]+)"/.exec(m[1]);
    const lon = /\blon="([-\d.]+)"/.exec(m[1]);
    if (lat && lon) {
      const la = parseFloat(lat[1]), lo = parseFloat(lon[1]);
      if (!isNaN(la) && !isNaN(lo)) coords.push([la, lo]);
    }
  }
  return coords;
}

const r = n => Math.round(n * 10 ** PREC) / 10 ** PREC;

const files = fs.readdirSync(DIR).filter(f => f.toLowerCase().endsWith('.gpx')).sort();
const routes = [];
let rawPts = 0, keptPts = 0;

for (const f of files) {
  let coords = parseCoords(fs.readFileSync(path.join(DIR, f), 'utf8'));
  rawPts += coords.length;
  if (coords.length >= 3) coords = rdp(coords, EPS);
  keptPts += coords.length;
  const d = (f.match(/(\d{4}-\d{2}-\d{2})/) || [])[1] || f.replace(/\.gpx$/i, '');
  routes.push({ d, c: coords.map(([a, b]) => [r(a), r(b)]) });
}

fs.writeFileSync(path.join(__dirname, 'routes.json'), JSON.stringify(routes));
const pct = rawPts ? (100 * keptPts / rawPts).toFixed(1) : '0';
console.log(`routes.json: ${routes.length} routes, points ${rawPts} -> ${keptPts} (${pct}%)`);
