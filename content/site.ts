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

// live/repo/proposal left as "" are hidden on the page — never fill these with a guessed URL.
// proposal is optional: a path to a file in public/, e.g. "/gboyz-proposal.pdf".
export type Project = {
  name: string;
  problem: string;
  built: string;
  result: string;
  tech: string[];
  live: string;
  repo: string;
  proposal?: string;
};

// Dates are display text exactly as Lance wrote them, not parsed dates.
export type TimelineItem = { date: string; event: string };

export type Role = { title: string; org: string; dates: string };

// Shared contact links, defined once so the hero and contact sections can't drift apart.
const email = "mailto:gonzalezlance01@gmail.com";
const linkedin = "https://www.linkedin.com/in/lance-o-gonzalez";

// Hero line is reused as the page description for search results and link previews.
const heroLine =
  "AI tools and automations for reentry organizations and small businesses. Built by me. Taught in plain language.";

export const site = {
  name: "Lance Gonzalez",

  // Page metadata: browser tab, search results, and the preview card when the link is shared.
  meta: {
    title: "Lance Gonzalez",
    description: heroLine,
  },

  // Code-style tag shown next to the LG monogram in the nav (hidden on narrow phones).
  navTag: 'git commit -m "the saga continues"',

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
    line: heroLine,
    button: { label: "Let's connect", href: "#contact" },
    // File lives in public/; the alt text is what screen readers say for the photo.
    headshot: { src: "/headshot.png", alt: "Portrait of Lance Gonzalez" },
    // Display order matters: LinkedIn, Email, GitHub, Instagram.
    socials: [
      { label: "LinkedIn", icon: "linkedin", href: linkedin },
      { label: "Email", icon: "email", href: email },
      { label: "GitHub", icon: "github", href: "https://github.com/LanceCodes1" },
      { label: "Instagram", icon: "instagram", href: "" },
    ] satisfies SocialLink[],
  },

  // Tools shown in the scrolling strip under the hero, in display order.
  techStrip: [
    "Claude",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "SQL",
    "Postgres",
    "Prisma",
    "Zapier",
    "Vercel",
    "GitHub",
  ],

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
    labels: {
      problem: "Problem",
      built: "What I built",
      result: "Result",
      live: "Live site",
      repo: "Code",
      proposal: "View proposal",
    },
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
          "A custom wheel shop gets 100+ quote requests a week through DMs and calls, and quoting by message takes 10 to 15 minutes of back-and-forth each.",
        built:
          "A quote form that feeds a Zapier and AI workflow. It turns each request into a call sheet with starting prices and questions to ask, emails it to the owner with a tap-to-call link, and logs it in a sheet. Code does the math, and the owner sets every final price.",
        result: "Built and tested with live form submissions. Not yet running in the shop.",
        tech: ["Zapier", "AI by Zapier", "Python", "Google Sheets"],
        live: "",
        repo: "",
        // Stays "" until public/gboyz-proposal.pdf is added; then set to "/gboyz-proposal.pdf".
        proposal: "",
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
        repo: "https://github.com/LanceCodes1/northstar-triage",
      },
    ] satisfies Project[],
  },

  path: {
    heading: "My path",
    // Terminal-style card beside the timeline. Each entry is a command and its output lines;
    // the "$" prompt and the blinking cursor are added by the component. Spaces inside a line are kept.
    terminal: [
      { command: "whoami", output: ["lance gonzalez"] },
      { command: "cat location.txt", output: ["Los Angeles, CA"] },
      { command: "cat role.txt", output: ["AI practitioner · reentry technologist · facilitator"] },
      { command: "cat now.txt", output: ["AI Builder @ Next Chapter"] },
      { command: "cat stack.txt", output: ["Next.js · TypeScript · Python · SQL · Postgres · Claude"] },
      {
        command: "ls projects/",
        output: [
          "haunted-hearse-tour  gboyz-quote-automation",
          "prompt-playbook      northstar-triage",
        ],
      },
      {
        command: "cat services.txt",
        output: ["AI automations", "Websites and landing pages", "AI workshops and training"],
      },
      { command: "git log -1", output: ["the saga continues"] },
    ],
    intro:
      "The transformation took place on the inside. The struggle never let up, but focus, vision, and determination set a path toward redemption and success. That is where I began facilitating groups, turned my life around, and laid the foundation for everything I do today as a reentry technologist, AI practitioner, and speaker and facilitator. What was built in there compounds out here. The saga continues.",
    timeline: [
      { date: "Mar 2025", event: "Came home" },
      { date: "May 2025", event: "Completed peer support specialist training" },
      { date: "Dec 2025", event: "Graduated from the Defy Ventures Entrepreneur Bootcamp" },
      {
        date: "Spring 2026",
        event: "Started at Cal State LA, studying Computer Science and Communications",
      },
      { date: "Sep 2026", event: "Graduated from The Knowledge House, AI Business Solutions" },
      { date: "Sep 2026", event: "Joined Next Chapter as an AI Builder" },
      { date: "Nov 2026", event: "Completed the AI Tech Corps intensive" },
    ] satisfies TimelineItem[],
  },

  experience: {
    heading: "Experience and credentials",
    rolesHeading: "Experience",
    roles: [
      { title: "AI Builder", org: "Next Chapter", dates: "Sep – Dec 2026" },
      { title: "Community Navigator", org: "Mass Liberation", dates: "Current" },
      {
        title: "California Justice Leaders Fellow",
        org: "Impact Justice / AmeriCorps",
        dates: "Feb – Oct 2026",
      },
      {
        title: "Technical Facilitator / Teaching Assistant",
        org: "Firme Coding",
        dates: "Jan 2026 – present",
      },
      { title: "Case Manager", org: "Re-Evolution", dates: "Nov 2025 – Aug 2026" },
    ] satisfies Role[],
    credentialsHeading: "Credentials",
    credentials: [
      "The Knowledge House Innovation Fellowship, AI Business Solutions",
      "IBM Generative AI Engineering certificate",
      "AI Tech Corps (The Knowledge House x OptimaNova AI)",
      "Firme Coding certifications: Logic & Critical Thinking, Intro to SwiftUI",
      "Defy Ventures Entrepreneur Bootcamp",
      "Computer Science and Communications, Cal State LA (in progress)",
    ],
  },

  contact: {
    heading: "Let's build something impactful",
    line: "Got an idea, or a problem that keeps eating your week? Bring it to me and let's build the fix.",
    buttons: [
      { label: "Email me", href: email },
      { label: "Connect on LinkedIn", href: linkedin },
    ],
  },

  footer: {
    tagline: "Reason. Reframe. Regroup. Repeat.",
    copyright: "© 2026 Lance Gonzalez. All rights reserved.",
  },
};
