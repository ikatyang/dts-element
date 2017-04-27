jest.unmock('../emit-accessor');

import {VariableDeclaration} from '../../elements/declarations/variable';
import {emit_accessor} from '../emit-accessor';

const invalid = null as any; // TODO

it('should return empty string while accessor is null', () => {
  expect(emit_accessor(null, invalid)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration', () => {
  expect(emit_accessor('public', invalid)).toBe('');
});

it('should return accessor prefix while accessor is not null and owned is VariableDeclaration', () => {
  const accessor = 'public';
  const variable_declaration = Object.create(VariableDeclaration.prototype);
  expect(emit_accessor(accessor, variable_declaration)).toBe(`${accessor} `);
});
