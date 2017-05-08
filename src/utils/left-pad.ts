export const left_pad = (str: string, length: number, char: string): string =>
  char.repeat(length - str.length) + str;
