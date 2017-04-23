import { trim_every_line } from '../trim-every-line';

it('should remove leading spaces and trailing spaces', () => {
  expect(trim_every_line('  Line 1  \n  Line 2  \n  Line 3  ')).toBe('Line 1\nLine 2\nLine 3');
});
