import { site } from "@/content/site";
import { Section } from "@/components/Section";

// What Lance offers, shown as simple cards: one column on phones, three on wider screens.
export function Services() {
  const { services } = site;
  return (
    <Section id="services" heading={services.heading}>
      <ul className="grid gap-4 sm:grid-cols-3">
        {services.items.map((item) => (
          <li key={item.title} className="rounded-lg border border-zinc-800 p-5">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-zinc-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
