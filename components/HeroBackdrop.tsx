import Image from "next/image";

// LA sunset image behind the top of the page (nav + hero).
// It lives at page level, not inside the hero, because the nav's height changes with screen width
// (links wrap on phones). Starting at the very top of the page keeps the skyline behind the nav
// on every screen size.
export function HeroBackdrop() {
  return (
    // Height: the image's own shape (941/1672 ≈ 56.28% of the width), but never shorter than 40rem,
    // so the overlay always has room to fade fully to the page color.
    <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[max(56.28vw,40rem)]">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        // object-top anchors the image to the top, so the sun and skyline stay in view.
        className="object-cover object-top"
      />
      {/* Dark navy overlay: light at the top, nearly solid by the middle of the hero, solid at the bottom.
          Stops are in rem (not %) so they line up with the hero text at every screen width. */}
      <div className="hero-overlay absolute inset-0" />
    </div>
  );
}
