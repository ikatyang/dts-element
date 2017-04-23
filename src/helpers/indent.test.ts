import { indent } from './indent';

const pre_indent = `line 1
line 2
line 3`;

const post_indent = `  line 1
  line 2
  line 3`;

it('should return indented string', () => {
  expect(indent(pre_indent)).toBe(post_indent);
});
