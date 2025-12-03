// app/projects/projectsData.ts

export type Project = {
  slug: string; // URL part, e.g. "cardinal-prototype-one"
  title: string; // Display title
  tag: string; // Small label above the card
  summary: string; // Short text for the homepage card
  description: string; // Longer text for the case-study page
  status: "in-progress" | "released" | "prototype";
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "cardinal-prototype-one",
    title: "Cardinal Prototype One",
    tag: "Roblox | Combat & Character Creation",
    summary:
      "Deepwoken-inspired prototype featuring custom movement, lock-on combat, and an advanced race & attribute-based character creator.",
    description:
      "Cardinal Prototype One is a Roblox project inspired by Deepwoken. It focuses on custom locomotion, a lock-on combat system, and a detailed character creator driven by races, attributes and future boons/flaws.",
    status: "in-progress",
    tech: ["Roblox Studio", "Luau", "Custom movement", "Lock-on combat"],
  },
  {
    slug: "project-hsssz",
    title: "Project HSSSZ",
    tag: "Unity | FMP | Cyborg Zombie Shooter",
    summary:
      "Procedural maze shooter with Nemesis-style AI, dynamic cover placement, and sci-fi cyborg zombies.",
    description:
      "Project HSSSZ is a Unity-based cyborg-zombie shooter built for your FMP. It uses a procedural maze generator, cover placement system, and a Nemesis-style AI that learns from player behaviour.",
    status: "prototype",
    tech: ["Unity", "C#", "Procedural generation", "AI / Nemesis system"],
  },
  {
    slug: "ue5-movement-system",
    title: "Shadows / UE5 Movement System",
    tag: "Unreal Engine 5 | C++",
    summary:
      "Custom third-person controller with sliding, wall-climbing and parkour-inspired movement.",
    description:
      "This Unreal Engine 5 project is your playground for advanced character movement: sliding, wall-climbing, parkour-style traversal and more, built in a mix of C++ and Blueprints.",
    status: "in-progress",
    tech: ["Unreal Engine 5", "C++", "Character movement"],
  },
];

// Look up a single project by slug
export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Used later if we want to pre-generate static pages
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
