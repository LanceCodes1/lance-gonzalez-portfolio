import { site } from "@/content/site";

// Top bar that stays visible while scrolling; links jump to section ids on the same page.
export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/95">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
        <a href="#top" className="font-semibold">
          {site.name}
        </a>
        {/* flex-wrap lets the links drop to a second line on narrow phones instead of overflowing. */}
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-300">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
