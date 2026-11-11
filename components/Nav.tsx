import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { Logo } from "@/components/Logo";
import { theme, type GlowColor } from "@/components/glow";

// Each nav pill is tinted with the glow color of the section it jumps to.
const pillColor: Record<string, GlowColor> = {
  "#services": "blue",
  "#projects": "green",
  "#path": "amber",
  "#experience": "purple",
  "#contact": "orange",
};

// Top bar that stays visible while scrolling; links jump to section ids on the same page.
export function Nav() {
  return (
    // Semi-transparent background + backdrop-blur lets content softly show through as it scrolls under.
    <header className="sticky top-0 z-20 border-b border-line/70 bg-ink/70 backdrop-blur-md">
      {/* gap-x-6 sets equal spacing on both sides of the tag, which grows (flex-1) to fill the middle.
          Phones (under 640px): one compact row, about 56px tall (py-2 + 32px logo / 38px pill row).
          Every sm: class restores the original layout, so tablets and desktops are unchanged. */}
      <nav className="mx-auto flex max-w-5xl flex-nowrap items-center justify-between gap-x-3 px-4 py-2 sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:px-6 sm:py-4">
        {/* The monogram is the home link; aria-label gives it a name since the SVG has no text.
            shrink-0 keeps it full size when the pill row is squeezed on phones. */}
        <a href="#top" aria-label={site.name} className="shrink-0 rounded-xl">
          <Logo className="h-8 w-8 sm:h-9 sm:w-9" />
        </a>
        {/* Same font and weight as the hero name (Geist, extra bold, tight tracking), in neon green,
            centered between logo and links. Shown only from lg (1024px) up: below that it doesn't fit. */}
        <p className="hidden flex-1 text-center text-xl font-extrabold tracking-tight whitespace-nowrap text-neon-green lg:block">
          {site.navTag}
        </p>
        {/* Phones: a single row that scrolls sideways (overflow-x-auto) instead of wrapping.
            The small padding (px-1.5 py-1.5) leaves room so focus rings aren't clipped by the scroll area.
            From sm up: the original wrapping row with no scrolling. */}
        <ul className="flex min-w-0 flex-1 flex-nowrap gap-2 overflow-x-auto px-1.5 py-1.5 text-xs sm:flex-none sm:flex-wrap sm:overflow-visible sm:p-0 sm:text-sm">
          {site.nav.map((link) => (
            // shrink-0 + whitespace-nowrap stop a pill like "My Path" from squeezing onto two lines.
            <li key={link.href} className="shrink-0 whitespace-nowrap">
              {/* --pill feeds the nav-pill style in globals.css with this link's color. */}
              <a
                href={link.href}
                className="nav-pill lift"
                style={{ "--pill": theme[pillColor[link.href] ?? "amber"] } as CSSProperties}
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
