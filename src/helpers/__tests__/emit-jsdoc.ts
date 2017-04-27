jest.unmock('../emit-jsdoc');

import {emit_jsdoc} from '../emit-jsdoc';

it('should return empty string while input is empty string', () => {
  expect(emit_jsdoc('')).toBe('');
});

it('should return formatted jsdoc while input is non-empty string', () => {
  expect(emit_jsdoc('line 1\nline 2\nline 3')).toBe('/**\n * line 1\n * line 2\n * line 3\n */');
});
