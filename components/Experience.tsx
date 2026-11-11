import { site } from "@/content/site";
import { Section } from "@/components/Section";

// Roles and credentials side by side on wide screens, stacked on phones.
export function Experience() {
  const { experience } = site;
  return (
    <Section id="experience" heading={experience.heading}>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">{experience.rolesHeading}</h3>
          <ul className="mt-5 space-y-5">
            {experience.roles.map((r) => (
              <li key={r.title + r.org}>
                <p className="font-semibold">{r.title}</p>
                <p className="text-muted">{r.org}</p>
                <p className="text-sm text-amber">{r.dates}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{experience.credentialsHeading}</h3>
          {/* list-disc gives bullets; marker:text-sunset colors just the bullet, not the text. */}
          <ul className="mt-5 list-disc space-y-3 pl-5 text-muted marker:text-sunset">
            {experience.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
