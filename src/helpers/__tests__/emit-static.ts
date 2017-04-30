jest.unmock('../emit-static');

import {VariableDeclaration} from '../../elements/declarations/variable-declaration';
import {IndexSignature} from '../../elements/index-signature';
import {emit_static} from '../emit-static';

const index_signature: IndexSignature = Object.create(IndexSignature.prototype);
const variable_declaration: VariableDeclaration = Object.create(VariableDeclaration.prototype);

it('should return empty string while static is disabled', () => {
  expect(emit_static(false, variable_declaration)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration', () => {
  expect(emit_static(true, index_signature)).toBe('');
});

it('should return static prefix while static is enabled and owned is VariableDeclaration', () => {
  expect(emit_static(true, variable_declaration)).toBe('static ');
});
