jest.unmock('../emit-accessor');

import {VariableDeclaration} from '../../elements/declarations/variable';
import {IndexSignature} from '../../elements/index-signature';
import {emit_accessor} from '../emit-accessor';

const index_signature: IndexSignature = Object.create(IndexSignature.prototype);
const variable_declaration: VariableDeclaration = Object.create(VariableDeclaration.prototype);

it('should return empty string while accessor is null', () => {
  expect(emit_accessor(null, variable_declaration)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration', () => {
  expect(emit_accessor('public', index_signature)).toBe('');
});

it('should return accessor prefix while accessor is not null and owned is VariableDeclaration', () => {
  const accessor = 'public';
  expect(emit_accessor(accessor, variable_declaration)).toBe(`${accessor} `);
});
