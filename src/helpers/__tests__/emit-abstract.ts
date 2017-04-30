jest.unmock('../emit-abstract');

import {VariableDeclaration} from '../../elements/declarations/variable-declaration';
import {IndexSignature} from '../../elements/index-signature';
import {emit_abstract} from '../emit-abstract';

const index_signature: IndexSignature = Object.create(IndexSignature.prototype);
const variable_declaration: VariableDeclaration = Object.create(VariableDeclaration.prototype);

it('should return empty string while abstract is disabled', () => {
  expect(emit_abstract(false, variable_declaration)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration', () => {
  expect(emit_abstract(true, index_signature)).toBe('');
});

it('should return abstract prefix while abstract is enabled and owned is VariableDeclaration', () => {
  expect(emit_abstract(true, variable_declaration)).toBe('abstract ');
});
