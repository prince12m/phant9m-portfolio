// app/projects/projectsData.ts

export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  tech: string[];
  role: string;
  status: "proto" | "in-progress" | "released";
  links?: { label: string; href: string }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "cardinal-prototype-one",
    title: "Cardinal Prototype One",
    tag: "Roblox · Combat & Character Creation",
    summary:
      "Deepwoken-inspired Roblox prototype focusing on movement, lock-on combat and a race & attribute-driven character creator.",
    tech: ["Roblox Studio", "Luau", "State Machines", "RemoteEvents"],
    role: "Solo developer – design, scripting, systems.",
    status: "in-progress",
    links: [
      // fill these when you have them
      // { label: "Gameplay video", href: "https://..." },
    ],
    highlights: [
      "Custom movement system with sprinting, dashing, strafing and lock-on camera.",
      "Race, attribute and weapon-class based character creation pipeline.",
      "Architecture designed for PvP-first combat and future skill trees.",
    ],
  },
  {
    slug: "project-hsssz",
    title: "Project HSSSZ",
    tag: "Unity · FMP · Cyborg Zombie Shooter",
    summary:
      "Third-person shooter with procedural mazes, cover placement and a Nemesis-style cyborg zombie AI.",
    tech: ["Unity", "C#", "Invector", "Procedural Generation"],
    role: "Solo developer – systems, AI behaviour, level logic.",
    status: "in-progress",
    links: [
      // { label: "Devlog", href: "https://..." },
    ],
    highlights: [
      "Procedural maze generation tied to enemy behaviour and cover placement.",
      "Dynamic cover objects that orient correctly to walls and paths.",
      "Foundation for a Nemesis system that remembers player choices.",
    ],
  },
  {
    slug: "ue5-movement-system",
    title: "UE5 Advanced Movement System",
    tag: "Unreal Engine 5 · C++",
    summary:
      "Custom third-person character controller for an original project, with responsive sliding and future wall-movement.",
    tech: ["Unreal Engine 5", "C++", "Enhanced Input"],
    role: "Solo developer – C++ implementation & design.",
    status: "proto",
    links: [
      // { label: "Prototype clip", href: "https://..." },
    ],
    highlights: [
      "Slide mechanic integrated with UE5 Enhanced Input.",
      "Architecture planned for wall-climb, wall-jump and stamina systems.",
      "Serves as foundation for future narrative-driven game concepts.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
