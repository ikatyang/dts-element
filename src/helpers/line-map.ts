export const line_map = (str: string, fn: (line: string, index: number, lines: string[]) => string): string =>
  str.split('\n').map(fn).join('\n');
