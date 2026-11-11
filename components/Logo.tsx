// "LG" monogram drawn as SVG strokes (not text), so it looks identical in every browser.
// The same shapes are copied into app/icon.svg for the browser tab icon — keep them in sync.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        {/* Orange-to-amber, matching the theme's lead colors. */}
        <linearGradient id="lg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a18" />
          <stop offset="1" stopColor="#ffb627" />
        </linearGradient>
      </defs>
      {/* Dark rounded tile with a thin gradient border. */}
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#10132a" stroke="url(#lg-grad)" strokeWidth="2.5" />
      <g fill="none" stroke="url(#lg-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {/* L: down, then across. */}
        <path d="M11 20V44H24" />
        {/* G: an almost-full circle opening at the upper right, then a short bar into the middle. */}
        <path d="M52.2 24.3A12 12 0 1 0 55 32H45" />
      </g>
    </svg>
  );
}
