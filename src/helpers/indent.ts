export const indent = (str: string): string => str
  .split('\n')
  .map((line: string) => `  ${line}`)
  .join('\n');
