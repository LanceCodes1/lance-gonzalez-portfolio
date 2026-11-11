import { site } from "@/content/site";
import { Section } from "@/components/Section";

// Lance's story in his words, then a simple vertical timeline in date order.
export function MyPath() {
  const { path } = site;
  return (
    <Section id="path" heading={path.heading}>
      <p className="max-w-2xl text-lg text-zinc-300">{path.intro}</p>
      {/* An ordered list because the order matters; the left border draws the timeline line. */}
      <ol className="mt-10 space-y-6 border-l border-zinc-700 pl-6">
        {path.timeline.map((item) => (
          <li key={item.date + item.event}>
            <p className="text-sm font-medium text-zinc-400">{item.date}</p>
            <p className="mt-1">{item.event}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
