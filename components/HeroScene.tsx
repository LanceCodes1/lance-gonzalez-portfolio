// Original LA-at-sunset silhouette along the bottom of the hero: skyline, palm trees, low sun.
// Purely decorative (aria-hidden) and drawn from the small data lists below, so it's easy to tweak.
// Kept in its own file and commit so it can be removed in one step if it doesn't work out.

const GROUND = 240; // y of the horizon line; the drawing is 1200 wide x 240 tall

// Buildings: [left x, width, height]. Tall, narrow ones in the middle read as downtown.
const buildings: [number, number, number][] = [
  [0, 56, 38], [60, 34, 58], [98, 66, 30], [200, 40, 64], [244, 56, 44], [304, 30, 82],
  [338, 50, 50], [392, 36, 104], [432, 48, 150], [484, 30, 186], [518, 52, 128], [574, 38, 212],
  [616, 50, 160], [670, 34, 118], [708, 56, 74], [768, 40, 96], [812, 62, 42], [878, 42, 54],
  [924, 58, 34], [986, 36, 48], [1096, 48, 40], [1148, 52, 30],
];

// Palms: [base x, height, lean]. Lean shifts the top left (negative) or right (positive).
const palms: [number, number, number][] = [
  [130, 150, 10], [175, 115, -8], [815, 170, 12], [1015, 135, -10], [1065, 185, 6],
];

// Frond directions in degrees (0 = right, -90 = straight up). Spread like a fan, drooping at the sides.
const frondAngles = [-175, -145, -115, -80, -50, -20, 5, 170];

// One path for every building, plus a thin antenna on the tallest tower.
const skylinePath =
  buildings.map(([x, w, h]) => `M${x} ${GROUND}V${GROUND - h}H${x + w}V${GROUND}Z`).join("") +
  `M592 ${GROUND - 212}V${GROUND - 236}h2V${GROUND - 212}Z`;

// A frond is a thin leaf: two curves from the crown out to a tip that droops more when it points sideways.
function frond(cx: number, cy: number, angle: number) {
  const r = (angle * Math.PI) / 180;
  const len = 40;
  const tipX = cx + len * Math.cos(r);
  const tipY = cy + len * Math.sin(r) + 14 * Math.abs(Math.cos(r));
  const ctrlX = cx + len * 0.55 * Math.cos(r);
  const ctrlY = cy + len * 0.55 * Math.sin(r) - 9;
  const f = (n: number) => n.toFixed(1);
  return `M${f(cx)} ${f(cy)}Q${f(ctrlX)} ${f(ctrlY)} ${f(tipX)} ${f(tipY)}Q${f(ctrlX)} ${f(ctrlY + 7)} ${f(cx)} ${f(cy)}Z`;
}

export function HeroScene() {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 1200 ${GROUND}`}
      // "slice" fills the full width and crops the sides on narrow screens, anchored to the bottom.
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-36 w-full opacity-90 sm:h-48 md:h-56"
    >
      <defs>
        <linearGradient id="scene-sun" x1="0" y1="0" x2="0" y2="1">
          {/* Colors via style (not attributes) because CSS variables only work reliably in CSS. */}
          <stop offset="0" style={{ stopColor: "var(--color-amber)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-sunset)" }} />
        </linearGradient>
      </defs>
      {/* Low sun, half set below the horizon (the bottom half falls outside the drawing). */}
      <circle cx="900" cy={GROUND - 5} r="90" fill="url(#scene-sun)" opacity="0.45" />
      {/* fill-dusk / stroke-dusk are Tailwind classes made from the --color-dusk token. */}
      <g className="fill-dusk stroke-dusk">
        <path d={skylinePath} stroke="none" />
        {palms.map(([x, h, lean]) => {
          const cx = x + lean;
          const cy = GROUND - h;
          return (
            <g key={x}>
              {/* Trunk: a gentle curve from the ground up to the crown. */}
              <path d={`M${x} ${GROUND}Q${x + lean * 0.2} ${GROUND - h * 0.5} ${cx} ${cy}`} fill="none" strokeWidth="5" strokeLinecap="round" />
              {frondAngles.map((a) => (
                <path key={a} d={frond(cx, cy, a)} stroke="none" />
              ))}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
