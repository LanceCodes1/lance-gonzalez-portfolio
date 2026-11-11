import { site } from "@/content/site";
import { Icon } from "@/components/Icons";
import { ExternalLink } from "@/components/ExternalLink";

// First thing visitors see: who Lance is, one-line pitch, and ways to reach him.
export function Hero() {
  const { hero } = site;
  // Links with an empty href are dropped so we never show a dead or guessed URL.
  const socials = hero.socials.filter((s) => s.href !== "");

  return (
    <section id="top" className="mx-auto max-w-4xl px-4 py-20 sm:py-28">
      <p className="text-sm text-zinc-400">{hero.label}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{site.name}</h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-300">{hero.line}</p>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <a
          href={hero.button.href}
          className="rounded-md bg-white px-5 py-2.5 font-medium text-zinc-950 hover:bg-zinc-200"
        >
          {hero.button.label}
        </a>
        <ul className="flex gap-4 text-zinc-400">
          {socials.map((s) => (
            <li key={s.label}>
              <ExternalLink href={s.href} aria-label={s.label} className="hover:text-white">
                <Icon name={s.icon} />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
