import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Terminal } from "@/components/Terminal";

// Lance's story in his words and a timeline on the left; a terminal-style card on the right.
// Below 1024px the grid is one column, so the terminal stacks below the timeline.
export function MyPath() {
  const { path } = site;
  return (
    <Section id="path" heading={path.heading} glow={["amber", "pink"]}>
      {/* Grid items stretch to the row's height by default, so the terminal's column is exactly as tall
          as the intro + timeline: top-aligned with the intro, ending level with the last entry.
          28rem keeps the terminal a bit shorter than the left column, so it stretches to match
          instead of pushing past the last timeline entry. */}
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_28rem]">
        <div>
          <p className="max-w-2xl text-lg text-muted">{path.intro}</p>
          {/* An ordered list because the order matters; the left border draws the timeline line. */}
          <ol className="mt-12 ml-1.5 space-y-8 border-l border-neon-purple/50 pl-8">
            {path.timeline.map((item) => (
              <li key={item.date + item.event} className="relative">
                {/* Dot is pulled left onto the line: 2rem padding + half the dot's width + half the border. */}
                <span
                  aria-hidden="true"
                  className="timeline-dot absolute top-1 -left-[calc(2rem+0.375rem+0.5px)]"
                />
                <p className="text-sm font-semibold text-amber">{item.date}</p>
                <p className="mt-1 text-lg">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
        <Terminal />
      </div>
    </Section>
  );
}
