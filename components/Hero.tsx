import Image from "next/image";
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

// First thing visitors see: who Lance is, one-line pitch, photo, and ways to reach him.
export function Hero() {
  const { hero } = site;
  // Links with an empty href are dropped so we never show a dead or guessed URL.
  const socials = hero.socials.filter((s) => s.href !== "");

  return (
    // The sunset background image is drawn behind this section by HeroBackdrop (in app/page.tsx),
    // so it can also reach up behind the sticky nav.
    <section id="top" className="relative">
      {/* Phones: photo stacked above the text. Wider screens: text left, photo right. */}
      <div className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-4 py-16 sm:px-6 sm:py-24 md:flex-row md:items-center md:justify-between">
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

        {/* Gradient ring = a round wrapper with a gradient background and a little padding around the photo.
            On hover it lifts and gets a neon green glow (headshot-ring + lift in globals.css). */}
        <div className="headshot-ring lift shrink-0 self-start rounded-full p-1 md:self-center">
          {/* "fill" makes the image cover this positioned circle; overflow-hidden clips it round. */}
          <div className="relative h-40 w-40 overflow-hidden rounded-full sm:h-52 sm:w-52 md:h-72 md:w-72">
            <Image
              src={hero.headshot.src}
              alt={hero.headshot.alt}
              fill
              // Tells the browser the largest size it will show, so it downloads a small file, not the full original.
              sizes="(min-width: 768px) 288px, (min-width: 640px) 208px, 160px"
              // Above the fold, so load it right away instead of lazily.
              loading="eager"
              // The stylized portrait is already square and framed head-to-chest with the face centered,
              // so it fills the circle as-is: no zoom, no repositioning.
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
