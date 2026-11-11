import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";
import { cardGlow } from "@/components/glow";

// One card per project: problem → what was built → result, then tech tags and links.
export function Projects() {
  const { projects } = site;
  const { labels } = projects;

  return (
    <Section id="projects" heading={projects.heading} glow={["green", "blue"]}>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.items.map((p, i) => {
          // Only keep links that have a real URL; empty ones are hidden.
          const links = [
            { label: labels.live, href: p.live },
            { label: labels.repo, href: p.repo },
            { label: labels.proposal, href: p.proposal ?? "" },
          ].filter((l) => l.href !== "");
          // The title links to the live site first, the code second, or nowhere if both are empty.
          const titleHref = p.live || p.repo;

          return (
            <li key={p.name} className="card lift flex flex-col p-6" style={cardGlow(i)}>
              <h3 className="text-xl font-semibold">
                {titleHref ? (
                  <ExternalLink
                    href={titleHref}
                    className="decoration-amber decoration-2 underline-offset-4 hover:underline"
                  >
                    {p.name}
                  </ExternalLink>
                ) : (
                  p.name
                )}
              </h3>
              {/* A definition list pairs each label (Problem, Result…) with its text for screen readers. */}
              <dl className="mt-4 space-y-3 text-muted">
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-amber uppercase">{labels.problem}</dt>
                  <dd className="mt-1">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-amber uppercase">{labels.built}</dt>
                  <dd className="mt-1">{p.built}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-amber uppercase">{labels.result}</dt>
                  <dd className="mt-1">{p.result}</dd>
                </div>
              </dl>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              {links.length > 0 && (
                // mt-auto pushes links to the bottom so cards in a row line up.
                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  {links.map((l) => (
                    <ExternalLink key={l.label} href={l.href} className="btn-chip lift">
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
