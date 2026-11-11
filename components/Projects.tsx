import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";

// One card per project: problem → what was built → result, then tech tags and links.
export function Projects() {
  const { projects } = site;
  const { labels } = projects;

  return (
    <Section id="projects" heading={projects.heading}>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.items.map((p) => {
          // Only keep links that have a real URL; empty ones are hidden.
          const links = [
            { label: labels.live, href: p.live },
            { label: labels.repo, href: p.repo },
          ].filter((l) => l.href !== "");

          return (
            <li key={p.name} className="flex flex-col rounded-lg border border-zinc-800 p-5">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              {/* A definition list pairs each label (Problem, Result…) with its text for screen readers. */}
              <dl className="mt-3 space-y-3 text-zinc-300">
                <div>
                  <dt className="text-sm font-medium text-zinc-400">{labels.problem}</dt>
                  <dd>{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-zinc-400">{labels.built}</dt>
                  <dd>{p.built}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-zinc-400">{labels.result}</dt>
                  <dd>{p.result}</dd>
                </div>
              </dl>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded bg-zinc-800 px-2 py-0.5 text-sm text-zinc-200">
                    {t}
                  </li>
                ))}
              </ul>
              {links.length > 0 && (
                // mt-auto pushes links to the bottom so cards in a row line up.
                <div className="mt-auto flex gap-4 pt-4">
                  {links.map((l) => (
                    <ExternalLink
                      key={l.label}
                      href={l.href}
                      className="font-medium text-white underline underline-offset-4 hover:text-zinc-300"
                    >
                      {l.label}
                    </ExternalLink>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
