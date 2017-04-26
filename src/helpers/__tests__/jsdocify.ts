import {jsdocify} from '../jsdocify';

it('should return formatted jsdoc', () => {
  expect(jsdocify('line 1\nline 2\nline 3')).toBe('/**\n * line 1\n * line 2\n * line 3\n */');
});
