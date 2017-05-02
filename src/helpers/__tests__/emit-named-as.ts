jest.unmock('../emit-named-as');

import {emit_named_as} from '../emit-named-as';

it('should return empty-string while name is null', () => {
  expect(emit_named_as(null)).toBe('');
});

it('should return correctly while name is not null', () => {
  const name = 'test';
  expect(emit_named_as(name)).toBe(` as ${name}`);
});
