// TODOS
// * fix capitalisation
// * break out agendas, ice generation
// * break out file for triggers, subroutines, costs, effects (instant), effects (action)
// * change card effect generation: add flag for basic, advanced etc that fires additional functions.

import { wordLists } from "./wordLists.js";
import { seededRandom, getRandomElement, capitalizeFirstLetter, fillEffectPlaceholders } from "./utils.js";
import { sides, Side, factions, cardTypes, nameFormats, genericEffects, specificEffects, genericCorpEffects, genericRunnerEffects, triggerEffects } from "./cardData.js";

// Generates a string containing a randomly generated card with a title, faction, type, and effect.
// Ensures the final output does not exceed 299 characters.
export default async function getPostText() {
  const seed = Date.now();
  const random = seededRandom(seed);

  // Randomly select the card's side, faction, and type.
  const selectedSide: Side = getRandomElement([...sides], random);
  const selectedFaction = getRandomElement(factions[selectedSide], random);
  const selectedCardType = getRandomElement(cardTypes[selectedSide], random);

  const cardTitle = generateCardTitle(selectedCardType.name, random);
  const postText = generateCard(selectedSide, selectedFaction, selectedCardType, cardTitle, random);

  return postText.length > 299 ? postText.slice(0, 296) + "..." : postText;
}

// Determines the appropriate card generation function based on card type
function generateCard(selectedSide: Side, selectedFaction: string, selectedCardType: { name: string; generationMethod: string }, cardTitle: string, random: () => number): string {
  const generationFunction = generationMethods[selectedCardType.generationMethod];
  return generationFunction(selectedSide, selectedFaction, selectedCardType.name, cardTitle, random);
}

// Generates a basic card (Event or Operation) with a simple effect, no trigger.
function generateBasicCard(selectedSide: Side, selectedFaction: string, selectedCardType: string, cardTitle: string, random: () => number): string {
  let cardEffect = getRandomElement(getApplicableEffects(selectedSide, selectedFaction, selectedCardType, random), random);
  cardEffect = capitalizeFirstLetter(fillEffectPlaceholders(cardEffect, random));

  return `${cardTitle}\n${selectedFaction} - ${selectedCardType}\n\n${cardEffect}`;
}

// Generates an advanced card with a trigger effect.
function generateAdvancedCard(selectedSide: Side, selectedFaction: string, selectedCardType: string, cardTitle: string, random: () => number): string {
  const triggerEffect = getRandomElement(triggerEffects, random);
  let cardEffect = getRandomElement(getApplicableEffects(selectedSide, selectedFaction, selectedCardType, random), random);
  cardEffect = fillEffectPlaceholders(cardEffect, random);

  return `${cardTitle}\n${selectedFaction} - ${selectedCardType}\n\nWhen ${triggerEffect}, ${cardEffect}`;
}

// Retrieves a list of applicable effects based on the card's side, faction, and type.
function getApplicableEffects(selectedSide: Side, selectedFaction: string, selectedCardType: string, random: () => number): string[] {
  return [
    ...genericEffects,
    ...(selectedSide === "Corp" ? genericCorpEffects : genericRunnerEffects),
    ...(specificEffects[selectedCardType] || [])
  ];
}

// Generates a card title by selecting words from predefined categories based on the card type.
function generateCardTitle(cardType: string, random: () => number): string {
  const nameCategories = nameFormats[cardType as keyof typeof nameFormats];
  const word1 = getRandomElement(wordLists[nameCategories[0]], random);
  const word2 = getRandomElement(wordLists[nameCategories[1]], random);
  return `${word1} ${word2}`;
}

// Mapping of generation methods to functions
const generationMethods: Record<string, (selectedSide: Side, selectedFaction: string, selectedCardType: string, cardTitle: string, random: () => number) => string> = {
  generateBasicCard,
  generateAdvancedCard
};
