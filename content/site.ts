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

export type Service = { title: string; description: string };

// live/repo left as "" are hidden on the page — never fill these with a guessed URL.
export type Project = {
  name: string;
  problem: string;
  built: string;
  result: string;
  tech: string[];
  live: string;
  repo: string;
};

// Dates are display text exactly as Lance wrote them, not parsed dates.
export type TimelineItem = { date: string; event: string };

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

  services: {
    heading: "What I can build for you",
    items: [
      {
        title: "AI automations",
        description:
          "I set up workflows that handle repetitive work, like answering routine requests and drafting replies, with a person approving anything that matters. For small businesses and nonprofits.",
      },
      {
        title: "Websites and landing pages",
        description:
          "Clean, fast sites that explain what you do and make it easy for people to reach you.",
      },
      {
        title: "AI workshops and training",
        description:
          "Plain-language sessions that get a team using AI tools safely and confidently in their own work.",
      },
    ] satisfies Service[],
  },

  projects: {
    heading: "Work I've shipped",
    // Labels for the parts of each card, kept here so all wording is in one file.
    labels: { problem: "Problem", built: "What I built", result: "Result", live: "Live site", repo: "Code" },
    items: [
      {
        name: "Haunted Hearse Tour",
        problem: "AI tour guides tend to make things up.",
        built:
          "A full-stack AI app with three AI narrators, an AI tour planner, and saved tours you can share, with guardrails that keep the AI from inventing facts.",
        result: "Live and open to the public.",
        tech: ["Next.js", "Prisma", "Neon Postgres", "Vercel"],
        live: "https://haunted-hearse-tour.vercel.app",
        repo: "https://github.com/LanceCodes1/haunted-hearse-tour",
      },
      {
        name: "G Boyz Wire Wheels quote automation",
        problem:
          "A custom wheel shop gets 100+ quote requests a week and can't answer them all quickly.",
        built:
          "A Zapier and AI workflow that drafts quote replies, plus a one-page client proposal. The owner approves every price.",
        result: "Built and ready. Not yet running in the shop.",
        tech: ["Zapier", "AI workflow"],
        live: "",
        repo: "",
      },
      {
        name: "Prompt Playbook",
        problem: "People new to AI don't know what to ask it.",
        built: "A full-stack library of AI prompts for beginners.",
        result: "Working app with the code public.",
        tech: ["Next.js", "Prisma", "Neon Postgres"],
        live: "",
        repo: "https://github.com/LanceCodes1/prompt-playbook",
      },
      {
        name: "Northstar support-ticket triage",
        problem: "Support teams lose time sorting and answering routine tickets.",
        built:
          "A multi-agent system that triages tickets, with a critic agent that reviews flagged replies. Built by a team of five; I was the Integration Engineer, owning tool calls, policy lookup, ticket intake, and agent handoffs.",
        result: "Completed team capstone for The Knowledge House.",
        tech: ["Python", "LangChain"],
        live: "",
        repo: "",
      },
    ] satisfies Project[],
  },

  path: {
    heading: "My path",
    intro:
      "I spent nearly two decades incarcerated, and that is where I started facilitating groups. Since coming home I've put that same skill to work in reentry services and in tech. I explain technical ideas in plain language because that's how I learned them.",
    timeline: [
      { date: "Mar 2025", event: "Came home" },
      { date: "May 2025", event: "Peer support specialist training" },
      { date: "Dec 2025", event: "Defy Ventures entrepreneurship program" },
      { date: "Spring 2026", event: "Started at Cal State LA" },
      { date: "Feb – Sep 2026", event: "The Knowledge House, AI Business Solutions" },
      { date: "Sep 2026", event: "Next Chapter, AI Builder" },
      { date: "Nov 2026", event: "AI Tech Corps (The Knowledge House x OptimaNova AI)" },
    ] satisfies TimelineItem[],
  },
};
