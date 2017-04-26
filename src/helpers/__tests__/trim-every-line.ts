import {trim_every_line} from '../trim-every-line';

it('should remove leading spaces and trailing spaces', () => {
  expect(trim_every_line('  line 1  \n  line 2  \n  line 3  ')).toBe('line 1\nline 2\nline 3');
});
