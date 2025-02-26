// Generates a seeded random function to ensure reproducible randomness.
export function seededRandom(seed: number): () => number {
  return () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}

// Selects a random element from an array using a seeded random function.
export function getRandomElement<T>(array: T[], random: () => number): T {
  return array[Math.floor(random() * array.length)];
}

// Capitalizes the first letter of a given string.
export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Replaces placeholders like '[x]' with randomized values.
export function fillEffectPlaceholders(effect: string, random: () => number): string {
  return effect.replace(/\[x\]/g, () => String(Math.floor(random() * 5) + 1)); // Replaces [x] with a random number from 1 to 5.
}
