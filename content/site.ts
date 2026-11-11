// All site copy lives here so text can be edited in one place without touching components.
// Only add facts Lance has confirmed — nothing invented.

// Types describe the shape of each piece of copy so TypeScript catches typos or missing fields.
export type NavLink = { label: string; href: string };

// "icon" picks which inline SVG to draw; an empty href means the link is hidden on the page.
export type SocialLink = {
  label: string;
  icon: "github" | "linkedin" | "email" | "instagram";
  href: string;
};

// Shared contact links, defined once so the hero and contact sections can't drift apart.
const email = "mailto:gonzalezlance01@gmail.com";
const linkedin = "https://www.linkedin.com/in/lance-o-gonzalez";

export const site = {
  name: "Lance Gonzalez",

  // Each href points at a section id on the same page.
  nav: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "My Path", href: "#path" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  hero: {
    label: "AI Practitioner · Reentry Technologist · Los Angeles",
    line: "I build AI tools and automations for reentry organizations and small businesses, and I teach people how to use them.",
    button: { label: "Let's connect", href: "#contact" },
    socials: [
      { label: "GitHub", icon: "github", href: "https://github.com/LanceCodes1" },
      { label: "LinkedIn", icon: "linkedin", href: linkedin },
      { label: "Email", icon: "email", href: email },
      { label: "Instagram", icon: "instagram", href: "" },
    ] satisfies SocialLink[],
  },
};
