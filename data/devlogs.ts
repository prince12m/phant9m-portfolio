export type DevlogEntry = {
  id: string;
  projectSlug: string;
  date: string;
  title: string;
  summary?: string;
  content: string[];
};

export const devlogEntries: DevlogEntry[] = [
  {
    id: "cardinal-001",
    projectSlug: "cardinal-prototype-one",
    date: "2025-11-30",
    title: "Movement and camera foundations",
    summary:
      "First pass on custom movement, running, and basic lock-on camera behaviour.",
    content: [
      "Set up the base character controller in Roblox Studio and replaced the default controls with my own state-based system.",
      "Implemented walking and running with smoother transitions and started experimenting with a lock-on style camera similar to Deepwoken.",
      "Began documenting how states such as idle, run, and dash interact so I can extend this later for combat.",
    ],
  },
  {
    id: "cardinal-002",
    projectSlug: "cardinal-prototype-one",
    date: "2025-12-05",
    title: "Character creation prototype online",
    summary:
      "Race and attribute selection hooked into a proper UI flow for the first time.",
    content: [
      "Hooked up the early character creation flow: selecting races, names, and attributes with data stored in modules.",
      "Tested saving selections to the server so the character that spawns in-game reflects the choices made in the menu.",
      "Noted a couple of UX improvements for later: clearer error states and better feedback when rerolling races or surnames.",
    ],
  },
  {
    id: "hsssz-001",
    projectSlug: "project-hsssz",
    date: "2025-11-20",
    title: "Procedural maze and cover placement",
    summary:
      "Got the level generator and cover spawner talking to each other reliably.",
    content: [
      "Refined the procedural maze generator so rooms connect more cleanly and enemies do not get stuck on corners.",
      "Fixed several issues with the cover placement system, including overlaps, wrong rotations, and objects spawning too close together.",
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
      "Experimented with storing basic performance stats such as stealthy versus loud approaches, preferred weapons, and time-to-kill per encounter.",
      "Future idea: feed this data into maze generation so layouts react to how the player usually plays.",
    ],
  },
  {
    id: "ue5move-001",
    projectSlug: "ue5-movement-system",
    date: "2025-12-02",
    title: "Sliding and basic parkour pass",
    summary:
      "UE5 third-person template replaced with my custom slide and traversal logic.",
    content: [
      "Implemented a sliding mechanic in C++ and Blueprints and wired it into Unreal's Enhanced Input system.",
      "Debugged capsule collisions during slide transitions, especially crouch versus standing capsule sizes.",
      "Made notes on how to extend this into wall-running and ledge grabbing later.",
    ],
  },
  {
    id: "ue5move-002",
    projectSlug: "ue5-movement-system",
    date: "2025-12-10",
    title: "Refactoring for clarity",
    content: [
      "Cleaned up the character movement code so states such as walking, sprinting, and sliding are easier to follow.",
      "Split input handling from movement logic to mirror how I structure systems in other engines.",
      "This refactor should make it easier to port ideas between projects, especially Roblox and UE5.",
    ],
  },
];

export function getDevlogEntriesForProject(slug: string): DevlogEntry[] {
  return devlogEntries
    .filter((entry) => entry.projectSlug === slug)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function hasDevlogForProject(slug: string): boolean {
  return devlogEntries.some((entry) => entry.projectSlug === slug);
}
