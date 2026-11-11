import Image from "next/image";
import { site, type SocialLink } from "@/content/site";
import { Icon } from "@/components/Icons";
import { ExternalLink } from "@/components/ExternalLink";
import { HeroScene } from "@/components/HeroScene";

// Each social button gets its own neon color. The icon-btn style uses currentColor,
// so setting the text color here also colors the border, tint, and glow.
const iconColor: Record<SocialLink["icon"], string> = {
  linkedin: "text-neon-blue",
  email: "text-amber",
  github: "text-neon-purple",
  instagram: "text-neon-pink",
};

// First thing visitors see: who Lance is, one-line pitch, photo, and ways to reach him.
export function Hero() {
  const { hero } = site;
  // Links with an empty href are dropped so we never show a dead or guessed URL.
  const socials = hero.socials.filter((s) => s.href !== "");

  return (
    // "isolate" creates a stacking layer so the -z-10 glow sits behind the text but above the page background.
    <section id="top" className="relative isolate overflow-hidden">
      {/* Decorative sunset glow; aria-hidden so screen readers skip it. */}
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />
      {/* Skyline silhouette along the bottom edge; comes after the glow so it paints on top of it. */}
      <HeroScene />

      {/* Phones: photo stacked above the text. Wider screens: text left, photo right.
          Extra bottom padding leaves room for the skyline so it doesn't sit behind the buttons. */}
      <div className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-4 pt-16 pb-36 sm:px-6 sm:pt-24 sm:pb-44 md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-xl">
          <p className="text-sm font-medium tracking-wide text-amber">{hero.label}</p>
          <h1 className="text-sunset-gradient mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 text-lg text-muted sm:text-xl">{hero.line}</p>

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

        {/* Gradient ring = a round wrapper with a gradient background and a little padding around the photo. */}
        <div className="headshot-ring shrink-0 self-start rounded-full p-1 md:self-center">
          {/* "fill" makes the image cover this positioned circle; overflow-hidden clips it round. */}
          <div className="relative h-40 w-40 overflow-hidden rounded-full sm:h-52 sm:w-52 md:h-72 md:w-72">
            <Image
              src={hero.headshot.src}
              alt={hero.headshot.alt}
              fill
              // Tells the browser the largest size it will show, so it downloads a small file, not the 1024px original.
              sizes="(min-width: 768px) 288px, (min-width: 640px) 208px, 160px"
              // Above the fold, so load it right away instead of lazily.
              loading="eager"
              // Framing (photo is 1024x1536): show the 820px square from x 90-910, y 360-1180 —
              // a small margin above the hair down through shoulders and upper chest.
              // object-[50%_35%] picks rows 179-1203; scale-125 zooms that to 820px,
              // and the origin point decides which 820px stays in view.
              className="origin-[44%_88%] scale-125 object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
