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
      {/* gap-x-6 sets equal spacing on both sides of the tag, which grows (flex-1) to fill the middle. */}
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
        {/* The monogram is the home link; aria-label gives it a name since the SVG has no text. */}
        <a href="#top" aria-label={site.name} className="rounded-xl">
          <Logo className="h-9 w-9" />
        </a>
        {/* Plain gradient text in the marker font, centered in the space between logo and links.
            Shown only from lg (1024px) up: below that, logo + tag + links don't fit on one line. */}
        {/* Same font and weight as the hero name (Geist, extra bold, tight tracking), in neon green. */}
        <p className="hidden flex-1 text-center text-xl font-extrabold tracking-tight whitespace-nowrap text-neon-green lg:block">
          {site.navTag}
        </p>
        {/* flex-wrap lets the links drop to a second line on narrow phones instead of overflowing. */}
        <ul className="flex flex-wrap gap-2 text-sm">
          {site.nav.map((link) => (
            <li key={link.href}>
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
