import { wordLists } from "./wordLists.js";
import { seededRandom, getRandomElement } from "./utils.js";
import { sides, Side, factions, cardTypes, nameFormats, effects, triggerEffects } from "./cardData.js";

export default async function getPostText() {
  const seed = Date.now();
  const random = seededRandom(seed);

  // Random selections
  const selectedSide: Side = getRandomElement(sides, random);
  const selectedFaction = getRandomElement(factions[selectedSide], random);
  const selectedCardType = getRandomElement(cardTypes[selectedSide], random);

  const cardTitle = generateCardTitle(selectedCardType, random);
  const cardEffect = getRandomElement(effects, random);
  const triggerEffect = getRandomElement(triggerEffects, random);

  const cardText = `When ${triggerEffect}, ${cardEffect}`;

  let postText = `${cardTitle}\n\n${cardText}`;

  return postText.length > 299 ? postText.slice(0, 296) + "..." : postText;
}

function generateCardTitle(cardType: string, random: () => number): string {
  const nameCategories = nameFormats[cardType];
  const word1 = getRandomElement(wordLists[nameCategories[0]], random);
  const word2 = getRandomElement(wordLists[nameCategories[1]], random);
  return `${word1} ${word2}`;
}
