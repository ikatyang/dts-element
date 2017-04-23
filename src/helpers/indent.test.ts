import { indent } from './indent';

const input = `line 1
line 2
line 3`;

const output = `  line 1
  line 2
  line 3`;

it('should return indented string', () => {
  expect(indent(input)).toBe(output);
});
