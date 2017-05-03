jest.unmock('../emit-accessor');

import {ClassAccessor, CLASS_ACCESSOR_MAP} from '../../constants';
import {VariableDeclaration} from '../../elements/declarations/variable-declaration';
import {IndexSignature} from '../../elements/index-signature';
import {emit_accessor} from '../emit-accessor';

const index_signature: IndexSignature = Object.create(IndexSignature.prototype);
const variable_declaration: VariableDeclaration = Object.create(VariableDeclaration.prototype);

it('should return empty string while accessor is NONE', () => {
  expect(emit_accessor(ClassAccessor.NONE, variable_declaration)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration', () => {
  expect(emit_accessor(ClassAccessor.PUBLIC, index_signature)).toBe('');
});

it('should return accessor prefix while accessor is not null and owned is VariableDeclaration', () => {
  const accessor = ClassAccessor.PUBLIC;
  expect(emit_accessor(accessor, variable_declaration)).toBe(`${CLASS_ACCESSOR_MAP[accessor]} `);
});
