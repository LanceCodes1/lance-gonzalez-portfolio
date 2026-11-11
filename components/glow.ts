// Shared color helpers for the neon glows. Values are CSS variables from the theme tokens in globals.css.
import type { CSSProperties } from "react";

export const theme = {
  orange: "var(--color-sunset)",
  amber: "var(--color-amber)",
  purple: "var(--color-neon-purple)",
  blue: "var(--color-neon-blue)",
  pink: "var(--color-neon-pink)",
  green: "var(--color-neon-green)",
} as const;

export type GlowColor = keyof typeof theme;

// Card hover glows cycle in this order, so neighboring cards never share a color.
const cardCycle: GlowColor[] = ["orange", "green", "purple", "blue"];

// Sets the --card-glow variable that the "card" style in globals.css reads on hover.
export function cardGlow(index: number): CSSProperties {
  return { "--card-glow": theme[cardCycle[index % cardCycle.length]] } as CSSProperties;
}
