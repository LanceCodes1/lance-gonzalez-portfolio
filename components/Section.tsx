import type { CSSProperties } from "react";
import { theme, type GlowColor } from "@/components/glow";

// Shared wrapper so every section has the same width, spacing, and heading style.
// The id is what nav links like "#services" jump to.
// "glow" picks the one or two soft background colors behind this section.
export function Section({
  id,
  heading,
  glow,
  children,
}: {
  id: string;
  heading: string;
  glow: [GlowColor, GlowColor?];
  children: React.ReactNode;
}) {
  const [a, b = a] = glow;
  // The section-glow style in globals.css paints radial gradients from these two variables.
  const glowVars = { "--glow-a": theme[a], "--glow-b": theme[b] } as CSSProperties;

  return (
    // relative + isolate so the glow layer can sit behind the content (-z-10) without leaking out.
    <section id={id} className="relative isolate">
      <div aria-hidden="true" className="section-glow absolute inset-0 -z-10" style={glowVars} />
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
        {/* Decorative gradient underline; aria-hidden since it carries no meaning. */}
        <span aria-hidden="true" className="heading-bar mt-4" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
