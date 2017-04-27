import {indent_every_line} from '../indent-every-line';

it('should return indented string', () => {
  const line1 = 'line 1';
  const line2 = 'line 2';
  const line3 = 'line 3';
  expect(indent_every_line(`${line1}\n${line2}\n${line3}`)).toBe(`  ${line1}\n  ${line2}\n  ${line3}`);
});
