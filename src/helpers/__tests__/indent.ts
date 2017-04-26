import {indent} from '../indent';

it('should return indented string', () => {
  expect(indent('line 1\nline 2\nline 3')).toBe('  line 1\n  line 2\n  line 3');
});
