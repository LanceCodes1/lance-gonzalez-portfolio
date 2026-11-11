import { site } from "@/content/site";
import { Logo } from "@/components/Logo";

// Top bar that stays visible while scrolling; links jump to section ids on the same page.
export function Nav() {
  return (
    // Semi-transparent background + backdrop-blur lets content softly show through as it scrolls under.
    <header className="sticky top-0 z-20 border-b border-line/70 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          {/* The monogram is the home link; aria-label gives it a name since the SVG has no text. */}
          <a href="#top" aria-label={site.name} className="rounded-xl">
            <Logo className="h-9 w-9" />
          </a>
          {/* Code-style tag in the mono font; "hidden sm:inline-block" shows it only from small tablets up. */}
          <code className="hidden rounded-md border border-line bg-surface/80 px-2 py-1 font-mono text-xs text-muted sm:inline-block">
            {site.navTag}
          </code>
        </div>
        {/* flex-wrap lets the links drop to a second line on narrow phones instead of overflowing. */}
        <ul className="flex flex-wrap gap-2 text-sm text-muted">
          {site.nav.map((link) => (
            <li key={link.href}>
              {/* Pill with a soft glow that lifts on hover (styles in globals.css). */}
              <a href={link.href} className="nav-pill lift">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
