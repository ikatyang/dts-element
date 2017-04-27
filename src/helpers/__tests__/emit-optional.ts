jest.unmock('../emit-optional');

import {emit_optional} from '../emit-optional';

it('should return empty string while optional is disabled', () => {
  expect(emit_optional(false)).toBe('');
});

it('should return optional operator whilte optional is enabled', () => {
  expect(emit_optional(true)).toBe('?');
});
