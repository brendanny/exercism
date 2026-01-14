export function decodedValue(colors: string[]) {
  return colorCode(colors[0]) * 10 + colorCode(colors[1]);
}

const colorCode = (color: string): number => {
  return colorCodes[color];
};

const colorCodes: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export const COLORS = Object.keys(colorCodes);
