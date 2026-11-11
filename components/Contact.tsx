import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";

// Final call to action. The hero's "Let's connect" button jumps here via id="contact".
export function Contact() {
  const { contact } = site;
  return (
    <Section id="contact" heading={contact.heading}>
      <p className="max-w-2xl text-lg text-zinc-300">{contact.line}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        {/* First button is solid, the rest outlined, so the main action stands out. */}
        {contact.buttons.map((b, i) => (
          <ExternalLink
            key={b.label}
            href={b.href}
            className={
              i === 0
                ? "rounded-md bg-white px-5 py-2.5 font-medium text-zinc-950 hover:bg-zinc-200"
                : "rounded-md border border-zinc-600 px-5 py-2.5 font-medium hover:border-zinc-400"
            }
          >
            {b.label}
          </ExternalLink>
        ))}
      </div>
    </Section>
  );
}
