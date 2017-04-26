import {line_map} from '../line-map';

const fn = (line: string): string => `- ${line} -`;

it('should return empty string while input string is empty', () => {
  expect(line_map('', fn)).toBe('');
});

it('should return mapped string while input string is non-empty', () => {
  expect(line_map('line 1\nline 2\nline 3', fn)).toBe('- line 1 -\n- line 2 -\n- line 3 -');
});
