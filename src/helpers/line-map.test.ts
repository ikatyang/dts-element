import { line_map } from './line-map';

const input = `line 1
line 2
line 3`;

const output = `- line 1 -
- line 2 -
- line 3 -`;

it('should return mapped string', () => {
  expect(line_map(input, (line: string) => `- ${line} -`)).toBe(output);
});
