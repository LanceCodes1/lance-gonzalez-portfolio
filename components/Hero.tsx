import { site, type SocialLink } from "@/content/site";
import { Icon } from "@/components/Icons";
import { ExternalLink } from "@/components/ExternalLink";

// Each social button gets its own neon color. The icon-btn style uses currentColor,
// so setting the text color here also colors the border, tint, and glow.
const iconColor: Record<SocialLink["icon"], string> = {
  linkedin: "text-neon-blue",
  email: "text-amber",
  github: "text-neon-purple",
  instagram: "text-neon-pink",
};

// First thing visitors see: who Lance is, one-line pitch, and ways to reach him.
export function Hero() {
  const { hero } = site;
  // Links with an empty href are dropped so we never show a dead or guessed URL.
  const socials = hero.socials.filter((s) => s.href !== "");

  return (
    // "isolate" creates a stacking layer so the -z-10 glow sits behind the text but above the page background.
    <section id="top" className="relative isolate overflow-hidden">
      {/* Decorative sunset glow; aria-hidden so screen readers skip it. */}
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-medium tracking-wide text-amber">{hero.label}</p>
        <h1 className="text-sunset-gradient mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{hero.line}</p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href={hero.button.href} className="btn-neon lift">
            {hero.button.label}
          </a>
          <ul className="flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <ExternalLink
                  href={s.href}
                  aria-label={s.label}
                  className={`icon-btn lift ${iconColor[s.icon]}`}
                >
                  <Icon name={s.icon} />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
