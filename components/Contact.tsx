import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";

// Button colors in order: "Email me" keeps the orange gradient, "Connect on LinkedIn" is electric blue.
const buttonStyles = ["btn-neon lift", "btn-blue lift"];

// Final call to action. The hero's "Let's connect" button jumps here via id="contact".
export function Contact() {
  const { contact } = site;
  return (
    <Section id="contact" heading={contact.heading} glow={["orange", "purple"]}>
      <p className="max-w-2xl text-lg text-muted">{contact.line}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        {contact.buttons.map((b, i) => (
          <ExternalLink key={b.label} href={b.href} className={buttonStyles[i] ?? buttonStyles[0]}>
            {b.label}
          </ExternalLink>
        ))}
      </div>
    </Section>
  );
}
