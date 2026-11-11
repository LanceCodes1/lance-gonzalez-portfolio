import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";

// Final call to action. The hero's "Let's connect" button jumps here via id="contact".
export function Contact() {
  const { contact } = site;
  return (
    <Section id="contact" heading={contact.heading} glow={["orange", "purple"]}>
      <p className="max-w-2xl text-lg text-muted">{contact.line}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        {/* Same gradient + glow + lift as the hero's "Let's connect" button. */}
        {contact.buttons.map((b) => (
          <ExternalLink key={b.label} href={b.href} className="btn-neon lift">
            {b.label}
          </ExternalLink>
        ))}
      </div>
    </Section>
  );
}
