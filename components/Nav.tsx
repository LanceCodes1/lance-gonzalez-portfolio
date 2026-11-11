import { site } from "@/content/site";

// Top bar that stays visible while scrolling; links jump to section ids on the same page.
export function Nav() {
  return (
    // Semi-transparent background + backdrop-blur lets content softly show through as it scrolls under.
    <header className="sticky top-0 z-20 border-b border-line/70 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        <a href="#top" className="text-sunset-gradient text-lg font-bold tracking-tight">
          {site.name}
        </a>
        {/* flex-wrap lets the links drop to a second line on narrow phones instead of overflowing. */}
        <ul className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted">
          {site.nav.map((link) => (
            <li key={link.href}>
              {/* Soft pill highlight on hover: a faint rounded background behind the link. */}
              <a
                href={link.href}
                className="block rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
