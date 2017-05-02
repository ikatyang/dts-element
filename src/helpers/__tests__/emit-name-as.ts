jest.unmock('../emit-name-as');

import {emit_name_as} from '../emit-name-as';

it('should return empty-string while name is null', () => {
  expect(emit_name_as(null)).toBe('');
});

it('should return correctly while name is not null', () => {
  const name = 'test';
  expect(emit_name_as(name)).toBe(`${name} as `);
});
