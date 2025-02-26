export const sides = ["Corp", "Runner"] as const;
export type Side = (typeof sides)[number];

export const factions = {
  Corp: ["Weyland", "NBN", "Jinteki", "Haas Bioroid"],
  Runner: ["Shaper", "Anarch", "Criminal"]
};

export const cardTypes = {
  Corp: [
    { name: "Asset", generationMethod: "generateAdvancedCard" },
    { name: "Upgrade", generationMethod: "generateAdvancedCard" },
    { name: "ICE", generationMethod: "generateAdvancedCard" },
    { name: "Operation", generationMethod: "generateBasicCard" },
    { name: "Agenda", generationMethod: "generateAdvancedCard" }
  ],
  Runner: [
    { name: "Program", generationMethod: "generateAdvancedCard" },
    { name: "Hardware", generationMethod: "generateAdvancedCard" },
    { name: "Resource", generationMethod: "generateAdvancedCard" },
    { name: "Event", generationMethod: "generateBasicCard" },
    { name: "Icebreaker", generationMethod: "generateAdvancedCard" }
  ]
};

export const nameFormats = {
  Program: ["tech", "dinosaurs"],
  Hardware: ["cyber", "metal"],
  Resource: ["job", "street"],
  Event: ["action", "scheme"],
  Icebreaker: ["ice", "breaker"],
  Asset: ["corp", "facility"],
  Upgrade: ["security", "tech"],
  ICE: ["barrier", "subroutine"],
  Operation: ["corp", "plan"],
  Agenda: ["agenda", "initiative"]
};

export const genericEffects = [
  "Gain [x] credits",
  "Draw [x] cards",
  "Trash a resource",
  "Steal an agenda",
  "Install a program at no cost",
  "Reveal the top card of R&D",
  "Make a run on HQ"
];

export const genericCorpEffects = [
  "Gain [x] credits from a successful trace",
  "Advance a card",
  "Install an ICE from HQ",
  "Force the Runner to lose [x] credits",
  "Tag the Runner",
  "Install a card, reducing the install cost by [x] credits",
  "Deal [x] meat damage",
  "Deal 1 core damage"
];

export const genericRunnerEffects = [
  "Gain [x] credits after a successful run",
  "Install a program, reducing the cost by [x] credits",
  "Remove a tag",
  "Expose an installed card",
  "Draw [x] cards after making a run",
  "Sabotage [x]"
];

export const specificEffects: Record<string, string[]> = {
  ICE: ["End the run", "Give the Runner [x] tags", "Do [x] net damage"],
  Icebreaker: ["Break [x] subroutines", "Increase strength by [x]"],
  Asset: ["Gain [x] credits at the start of the turn", "Draw 1 card when rezzed"],
  Upgrade: ["Give ICE +[x] strength", "Force the Runner to pay [x] more credits"],
  Agenda: ["Gain [x] credits when scored", "Place [x] advancement tokens elsewhere"],
  Resource: ["Gain [x] credits when you make a successful run", "Prevent [x] tags"],
  Hardware: ["Increase link strength by [x]", "Reduce memory cost by [x]"],
  Program: ["Break [x] ICE subroutines", "Increase efficiency of runs by [x]"],
  Event: ["Gain [x] credits", "Draw [x] cards"],
  Operation: ["Tag the Runner", "Trash a Runner card"]
};

export const triggerEffects = [
  "you install this card",
  "you make a successful run",
  "the Corp rezzes a piece of ICE",
  "you break a subroutine",
  "the Runner ends their turn with a tag",
  "an agenda is scored",
  "you access a card in HQ",
  "a trace is successful",
  "you lose a click",
  "you play an Event"
];
