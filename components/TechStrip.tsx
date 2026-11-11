import { site } from "@/content/site";

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
      {items.map((item) => (
        <li key={item} className="flex items-center gap-6 px-3 py-1 font-medium whitespace-nowrap text-muted">
          {/* Tiny pink dot: the "small hint" of pink in the theme. */}
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-neon-pink" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-fade overflow-hidden border-y border-line bg-surface/60 py-4">
      {/* Hovering pauses the scroll so people can read it. */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}
