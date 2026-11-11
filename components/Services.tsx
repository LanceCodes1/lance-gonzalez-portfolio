import { site } from "@/content/site";
import { Section } from "@/components/Section";

// What Lance offers, shown as cards: one column on phones, three on wider screens.
export function Services() {
  const { services } = site;
  return (
    <Section id="services" heading={services.heading}>
      <ul className="grid gap-5 sm:grid-cols-3">
        {services.items.map((item) => (
          <li key={item.title} className="card lift p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
