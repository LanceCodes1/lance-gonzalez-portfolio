import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { theme, type GlowColor } from "@/components/glow";

// Separator dots cycle through the theme colors in this order.
const dotCycle: GlowColor[] = ["orange", "amber", "pink", "purple", "blue", "green"];

// A row of tools that scrolls sideways forever, CSS only.
// Trick: the list is rendered twice side by side and the track slides left by exactly half its width,
// so when it jumps back to the start the second copy is in the same spot — the loop looks seamless.
export function TechStrip() {
  const items = site.techStrip;

  const list = (hidden: boolean) => (
    <ul
      // The copy is aria-hidden so screen readers only read the list once.
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center ${
        // With reduced motion: stop, wrap onto multiple lines, and drop the duplicate copy.
        hidden ? "motion-reduce:hidden" : "motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center"
      }`}
    >
      {items.map((item, i) => {
        // Dot color + matching glow; both copies use the same index, so the loop stays seamless.
        const color = theme[dotCycle[i % dotCycle.length]];
        const dot = { backgroundColor: color, boxShadow: `0 0 8px ${color}` } as CSSProperties;
        return (
          <li key={item} className="flex items-center gap-6 px-3 py-1 font-medium whitespace-nowrap text-muted">
            <span aria-hidden="true" className="h-2 w-2 rounded-full" style={dot} />
            {item}
          </li>
        );
      })}
    </ul>
  );

  return (
    // Two layers: the outer one carries the glow; the inner one fades the edges.
    // (A fade mask on the outer layer would also cut off its glow.)
    <div className="strip-glow border-y bg-surface/70 py-4">
      <div className="marquee-fade overflow-hidden">
        {/* Hovering pauses the scroll so people can read it. */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
          {list(false)}
          {list(true)}
        </div>
      </div>
    </div>
  );
}
