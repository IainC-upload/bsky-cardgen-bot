export default async function getPostText() {
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
  
  // Define name styles based on type
  const nameStyles: Record<string, string[]> = {
    Asset: ["Secure Vault", "Corporate Haven"],
    Upgrade: ["Advanced Systems", "Security Boost"],
    Operation: ["Hostile Takeover", "Corporate Espionage"],
    Agenda: ["Profit Margin", "Expansion Plan"],
    ICE: ["Firewall", "Data Sentry"],
    Program: ["Code Injector", "Neural Mapper"],
    Hardware: ["Cyber Deck", "Memory Expansion"],
    Resource: ["Hidden Network", "Safe House"],
    Event: ["Cyber Heist", "Tactical Retreat"],
    Icebreaker: ["Barrier Buster", "Code Cracker"]
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
  const selectedSide: Side = sides[Math.floor(Math.random() * sides.length)];
  
  // Select faction based on side
  const selectedFaction = factions[selectedSide][Math.floor(Math.random() * factions[selectedSide].length)];
  
  // Select card type based on side
  const selectedCardType = cardTypes[selectedSide][Math.floor(Math.random() * cardTypes[selectedSide].length)];
  
  // Generate card title and effect
  const cardTitle = nameStyles[selectedCardType][Math.floor(Math.random() * nameStyles[selectedCardType].length)];
  const cardEffect = effects[selectedCardType][Math.floor(Math.random() * effects[selectedCardType].length)];
  
  return `${cardTitle}\n\n${cardEffect}`;
}
