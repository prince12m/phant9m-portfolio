// app/projects/devlogsData.ts

export type DevlogEntry = {
  id: string;
  projectSlug: string; // should match Project.slug
  date: string; // e.g. "2025-12-01"
  title: string;
  summary?: string;
  content: string[]; // paragraphs
};

// All devlog entries for all projects
export const devlogEntries: DevlogEntry[] = [
  // CARDINAL PROTOTYPE ONE
  {
    id: "cardinal-001",
    projectSlug: "cardinal-prototype-one",
    date: "2025-11-30",
    title: "Movement & camera foundations",
    summary:
      "First pass on custom movement, running and basic lock-on camera behaviour.",
    content: [
      "Set up the base character controller in Roblox Studio and replaced the default controls with my own state-based system.",
      "Implemented walking/running with smoother transitions and started experimenting with a lock-on style camera similar to Deepwoken.",
      "Began documenting how states (idle, run, dash, etc.) interact so I can extend this later for combat.",
    ],
  },
  {
    id: "cardinal-002",
    projectSlug: "cardinal-prototype-one",
    date: "2025-12-05",
    title: "Character creation prototype online",
    summary:
      "Race/attribute selection hooked into a proper UI flow for the first time.",
    content: [
      "Hooked up the early character creation flow: selecting races, names and attributes with data stored in modules.",
      "Tested saving selections to the server so the character that spawns in-game reflects the choices made in the menu.",
      "Noted a couple of UX improvements for later: clearer error states and better feedback when rerolling races or surnames.",
    ],
  },

  // PROJECT HSSSZ
  {
    id: "hsssz-001",
    projectSlug: "project-hsssz",
    date: "2025-11-20",
    title: "Procedural maze + cover placement",
    summary:
      "Got the level generator and cover spawner talking to each other reliably.",
    content: [
      "Refined the procedural maze generator so rooms connect more cleanly and enemies don't get stuck on corners.",
      "Fixed several issues with the cover placement system (overlaps, wrong rotations, and objects spawning too close together).",
      "Documented rules for different cover types so future enemies and player abilities can use them consistently.",
    ],
  },
  {
    id: "hsssz-002",
    projectSlug: "project-hsssz",
    date: "2025-11-28",
    title: "Towards Nemesis-style AI",
    content: [
      "Started sketching how a Nemesis-style AI could track player behaviour across runs.",
      "Experimented with storing basic performance stats (stealthy vs loud, preferred weapons, time-to-kill per encounter).",
      "Future idea: feed this data into maze generation so layouts react to how the player usually plays.",
    ],
  },

  // UE5 MOVEMENT SYSTEM
  {
    id: "ue5move-001",
    projectSlug: "ue5-movement-system",
    date: "2025-12-02",
    title: "Sliding + basic parkour pass",
    summary:
      "UE5 third-person template replaced with my custom slide and traversal logic.",
    content: [
      "Implemented a sliding mechanic in C++/Blueprints and wired it into Unreal's Enhanced Input system.",
      "Debugged capsule collisions during slide transitions (crouch vs standing capsule sizes).",
      "Made notes on how to extend this into wall-running and ledge grabbing later.",
    ],
  },
  {
    id: "ue5move-002",
    projectSlug: "ue5-movement-system",
    date: "2025-12-10",
    title: "Refactoring for clarity",
    content: [
      "Cleaned up the character movement code so states (walking, sprinting, sliding) are easier to follow.",
      "Split input handling from movement logic to mirror how I structure systems in other engines.",
      "This refactor should make it easier to port ideas between projects (Roblox ↔ UE5).",
    ],
  },
];

// Get all entries for one project, sorted by date
export function getDevlogEntriesForProject(slug: string): DevlogEntry[] {
  return devlogEntries
    .filter((entry) => entry.projectSlug === slug)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
}

// Quick check: does this project have any devlog entries?
export function hasDevlogForProject(slug: string): boolean {
  return devlogEntries.some((entry) => entry.projectSlug === slug);
}
