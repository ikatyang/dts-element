import {line_map} from '../line-map';

const prefix = '- ';
const postfix = ' -';

const fn = (line: string): string => `${prefix}${line}${postfix}`;

it('should return empty string while input string is empty', () => {
  expect(line_map('', fn)).toBe('');
});

it('should return mapped string while input string is non-empty', () => {
  const line1 = 'line 1';
  const line2 = 'line 2';
  const line3 = 'line 3';
  expect(line_map(`${line1}\n${line2}\n${line3}`, fn))
    .toBe(`${prefix}${line1}${postfix}\n${prefix}${line2}${postfix}\n${prefix}${line3}${postfix}`);
});
