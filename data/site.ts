export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  kind: "email" | "linkedin" | "github" | "cv";
  external?: boolean;
};

export const siteProfile = {
  name: "Prince Malonga",
  alias: "Phant9m",
  domain: "phant9m.dev",
  role: "Game programmer and creative technologist",
  introduction:
    "I build systems-heavy experiences across Roblox, Unity, and Unreal, with a focus on movement, combat, AI, and game feel.",
  summary:
    "This portfolio is a growing archive of production-minded prototypes, engine experiments, and technical design work built to show how I think, iterate, and ship.",
};

export const heroHighlights = [
  "Advanced movement and combat systems",
  "Procedural level logic and reactive AI",
  "Polished prototypes designed for portfolio review",
];

export const heroStats = [
  { label: "Primary focus", value: "Gameplay systems" },
  { label: "Current engines", value: "Roblox, Unity, UE5" },
  { label: "Working style", value: "Fast iteration, clean foundations" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Game development",
    description: "Building core systems that feel responsive and readable.",
    items: ["Unity", "Unreal Engine 5", "Roblox Studio"],
  },
  {
    title: "Languages",
    description: "Writing gameplay and tooling code across multiple stacks.",
    items: ["C#", "C++", "TypeScript", "Luau"],
  },
  {
    title: "Web and tooling",
    description: "Shipping portfolio and platform work around the games.",
    items: ["Next.js", "React", "Tailwind CSS", "GitHub"],
  },
  {
    title: "Technical interests",
    description: "The areas I keep coming back to while building.",
    items: ["Combat design", "Movement", "AI behaviour", "Cloudflare Pages"],
  },
];

export const aboutParagraphs = [
  "I am a London-based developer studying Games Programming and building a portfolio of systems-driven projects across engines and platforms. I enjoy designing movement, combat, and AI just as much as I enjoy polishing the final player experience.",
  "Outside of game development, I explore cybersecurity, AI tooling, and creative media. That wider technical curiosity feeds back into the way I prototype smarter, more reactive systems.",
];

export const aboutHighlights = [
  { label: "Based in", value: "London" },
  { label: "Studying", value: "Games Programming" },
  { label: "Exploring", value: "Cybersecurity and AI tools" },
];

export const contactIntro =
  "For collaborations, opportunities, or questions about any project, email is the easiest way to reach me. LinkedIn, GitHub, and a current CV are also available below.";

export const contactLinks: ContactLink[] = [
  {
    label: "pmalonga2005@gmail.com",
    href: "mailto:pmalonga2005@gmail.com",
    kind: "email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prince-m-9a0492214/",
    kind: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/prince12m",
    kind: "github",
    external: true,
  },
  {
    label: "Download CV (PDF)",
    href: "/cv/prince-malonga-cv.pdf",
    kind: "cv",
    external: true,
  },
];
