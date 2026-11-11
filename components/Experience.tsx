import { site } from "@/content/site";
import { Section } from "@/components/Section";

// Roles and credentials side by side on wide screens, stacked on phones.
export function Experience() {
  const { experience } = site;
  return (
    <Section id="experience" heading={experience.heading}>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">{experience.rolesHeading}</h3>
          <ul className="mt-4 space-y-4">
            {experience.roles.map((r) => (
              <li key={r.title + r.org}>
                <p className="font-medium">{r.title}</p>
                <p className="text-zinc-300">{r.org}</p>
                <p className="text-sm text-zinc-400">{r.dates}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{experience.credentialsHeading}</h3>
          {/* list-disc gives plain bullets; pl-5 makes room for them. */}
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            {experience.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
