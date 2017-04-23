import { line_map } from './line-map';

const fn = (line: string): string => `- ${line} -`;

it('should return empty string while input string is empty', () => {
  expect(line_map('', fn)).toBe('');
});

it('should return mapped string while input string is non-empty', () => {
  expect(line_map('Line 1\nLine 2\nLine 3', fn)).toMatchSnapshot();
});
