export const PROJECT_STATUS_META = {
  "in-progress": {
    label: "In Progress",
    className:
      "border-cyan-400/40 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.12)]",
  },
  prototype: {
    label: "Prototype",
    className:
      "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_24px_rgba(232,121,249,0.12)]",
  },
  released: {
    label: "Released",
    className:
      "border-emerald-400/40 bg-emerald-400/10 text-emerald-200 shadow-[0_0_24px_rgba(52,211,153,0.12)]",
  },
} as const;

export type ProjectStatus = keyof typeof PROJECT_STATUS_META;

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  content: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "cardinal-prototype-one",
    title: "Cardinal Prototype One",
    tag: "Roblox | Combat and Character Creation",
    summary:
      "Deepwoken-inspired prototype featuring custom movement, lock-on combat, and an advanced race and attribute-based character creator.",
    description:
      "Cardinal Prototype One is a Roblox project inspired by Deepwoken. It focuses on custom locomotion, a lock-on combat system, and a detailed character creator driven by races, attributes, and future boons and flaws.",
    status: "in-progress",
    tech: ["Roblox Studio", "Luau", "Custom movement", "Lock-on combat"],
    featured: true,
    content: [
      "Cardinal Prototype One is my main Roblox prototype inspired by Deepwoken. The focus is on building a strong foundation: smooth movement, a responsive camera, and a flexible combat system.",
      "Under the hood, the project uses a state-based movement system, RemoteEvents for animation and combat sync, and a data-driven approach for races, attributes, and future boons and flaws.",
    ],
  },
  {
    slug: "project-hsssz",
    title: "Project HSSSZ",
    tag: "Unity | FMP | Cyborg Zombie Shooter",
    summary:
      "Procedural maze shooter with Nemesis-style AI, dynamic cover placement, and sci-fi cyborg zombies.",
    description:
      "Project HSSSZ is a Unity-based cyborg-zombie shooter built for my FMP. It uses a procedural maze generator, cover placement system, and a Nemesis-style AI that learns from player behaviour.",
    status: "prototype",
    tech: ["Unity", "C#", "Procedural generation", "AI and Nemesis system"],
    featured: true,
    content: [
      "HSSSZ is my FMP: a sci-fi cyborg-zombie shooter built in Unity with a procedural maze system.",
      "The project experiments with a Nemesis-style AI that tracks the player's behaviour over multiple runs and adapts future encounters.",
    ],
  },
  {
    slug: "ue5-movement-system",
    title: "Shadows / UE5 Movement System",
    tag: "Unreal Engine 5 | C++",
    summary:
      "Custom third-person controller with sliding, wall-climbing and parkour-inspired movement.",
    description:
      "This Unreal Engine 5 project is my playground for advanced character movement: sliding, wall-climbing, parkour-style traversal and more, built in a mix of C++ and Blueprints.",
    status: "in-progress",
    tech: ["Unreal Engine 5", "C++", "Character movement"],
    featured: true,
    content: [
      "The UE5 movement system project is all about feel: momentum, responsiveness and satisfying traversal.",
      "I use C++ for the core movement logic and Blueprints for quick iteration on tuning, effects, and camera behaviour.",
    ],
  },
];

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectStatusMeta(status: ProjectStatus) {
  return PROJECT_STATUS_META[status];
}
