export function twoFer(name?: string): string {
  return typeof name !== "undefined"
    ? `One for ${name}, one for me.`
    : "One for you, one for me.";
}
