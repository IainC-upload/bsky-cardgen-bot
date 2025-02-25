export const sides = ["Corp", "Runner"] as const;
export type Side = typeof sides[number];

export const factions: Record<Side, string[]> = {
  Corp: ["Weyland", "NBN", "Jinteki", "Haas Bioroid"],
  Runner: ["Shaper", "Anarch", "Criminal"]
};

export const cardTypes: Record<Side, string[]> = {
  Corp: ["Asset", "Upgrade", "Operation", "Agenda", "ICE"],
  Runner: ["Program", "Hardware", "Resource", "Event", "Icebreaker"]
};

export const nameFormats: Record<string, string[]> = {
  Program: ["tech", "dinosaurs"],
  Hardware: ["tech", "security"],
  Resource: ["finance", "hacking"],
  Event: ["hacking", "finance"],
  Icebreaker: ["security", "tech"],
  Asset: ["finance", "security"],
  Upgrade: ["tech", "hacking"],
  Operation: ["finance", "security"],
  Agenda: ["finance", "tech"],
  ICE: ["security", "hacking"]
};

export const effects: string[] = [
  "Gain 2 credits", "Draw 1 card", "Boost defense", "Increase efficiency",
  "Trash 1 card", "Steal resources", "Score for points", "Advance strategy",
  "Stop runner", "Trace attempt", "Bypass security", "Boost power",
  "Increase memory", "Enhance hacking", "Earn credits", "Gain influence",
  "Make a run", "Evade trace", "Break subroutines", "Strength boost"
];

export const triggerEffects: string[] = [
  "you install this", "the Runner accesses this",
  "you rez this", "the Runner encounters this server",
  "you score this", "you advance this",
  "the Runner encounters this", "this is broken",
  "you make a run", "you use this",
  "your turn begins", "you make a successful run",
  "you break a subroutine", "you encounter ICE"
];
