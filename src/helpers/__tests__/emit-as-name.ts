jest.unmock('../emit-as-name');

import {emit_as_name} from '../emit-as-name';

it('should return empty-string while name is null', () => {
  expect(emit_as_name(null)).toBe('');
});

it('should return correctly while name is not null', () => {
  const name = 'test';
  expect(emit_as_name(name)).toBe(` as ${name}`);
});
