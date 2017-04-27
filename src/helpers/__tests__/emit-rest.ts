jest.unmock('../emit-rest');

import {emit_rest} from '../emit-rest';

it('should return empty string while rest is disabled', () => {
  expect(emit_rest(false)).toBe('');
});

it('should return optional operator whilte rest is enabled', () => {
  expect(emit_rest(true)).toBe('...');
});
