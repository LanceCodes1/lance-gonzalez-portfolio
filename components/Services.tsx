import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { cardGlow } from "@/components/glow";

// What Lance offers, shown as cards: one column on phones, three on wider screens.
export function Services() {
  const { services } = site;
  return (
    <Section id="services" heading={services.heading} glow={["blue", "purple"]}>
      <ul className="grid gap-5 sm:grid-cols-3">
        {services.items.map((item, i) => (
          // cardGlow(i) gives each card its own hover glow color (orange, green, purple, blue…).
          <li key={item.title} className="card lift p-6" style={cardGlow(i)}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
