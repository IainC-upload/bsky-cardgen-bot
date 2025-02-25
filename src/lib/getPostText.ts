import { wordLists } from "./wordLists.js";

export default async function getPostText() {
  // Utility function for seeded random
  function seededRandom(seed: number) {
    let value = seed % 2147483647;
    return function () {
      value = (value * 16807) % 2147483647;
      return (value - 1) / 2147483646;
    };
  }

  // Generate a random seed (or use a fixed one for debugging)
  const seed = Date.now();
  const random = seededRandom(seed);

  // Helper function to get a random element from an array
  function getRandomElement<T>(arr: readonly T[]): T {
    return arr[Math.floor(random() * arr.length)];
  }

  // Define card sides
  const sides = ["Corp", "Runner"] as const;
  type Side = typeof sides[number];
  
  // Define factions
  const factions: Record<Side, string[]> = {
    Corp: ["Weyland", "NBN", "Jinteki", "Haas Bioroid"],
    Runner: ["Shaper", "Anarch", "Criminal"]
  };
  
  // Define card types
  const cardTypes: Record<Side, string[]> = {
    Corp: ["Asset", "Upgrade", "Operation", "Agenda", "ICE"],
    Runner: ["Program", "Hardware", "Resource", "Event", "Icebreaker"]
  };
  
  // Define how card names are generated per type
  const nameFormats: Record<string, string[]> = {
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
  
  // Define effects
  const effects: Record<string, string[]> = {
    Asset: ["Gain 2 credits", "Draw 1 card"],
    Upgrade: ["Boost defense", "Increase efficiency"],
    Operation: ["Trash 1 card", "Steal resources"],
    Agenda: ["Score for points", "Advance strategy"],
    ICE: ["Stop runner", "Trace attempt"],
    Program: ["Bypass security", "Boost power"],
    Hardware: ["Increase memory", "Enhance hacking"],
    Resource: ["Earn credits", "Gain influence"],
    Event: ["Make a run", "Evade trace"],
    Icebreaker: ["Break subroutines", "Strength boost"]
  };
  
  // Randomly select a side
  const selectedSide: Side = getRandomElement(sides);
  
  // Select faction based on side
  const selectedFaction = getRandomElement(factions[selectedSide]);
  
  // Select card type based on side
  const selectedCardType = getRandomElement(cardTypes[selectedSide]);
  
  // Generate card title using dynamic word lists
  const nameCategories = nameFormats[selectedCardType];
  const word1 = getRandomElement(wordLists[nameCategories[0]]);
  const word2 = getRandomElement(wordLists[nameCategories[1]]);
  const cardTitle = `${word1} ${word2}`;
  
  // Generate effect
  const cardEffect = getRandomElement(effects[selectedCardType]);
  
  return `${cardTitle}\n\n${cardEffect}`;
}
