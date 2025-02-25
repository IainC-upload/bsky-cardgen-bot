export function seededRandom(seed: number) {
  let value = seed % 2147483647;
  return function () {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export function getRandomElement<T>(arr: readonly T[], random: () => number): T {
  return arr[Math.floor(random() * arr.length)];
}
