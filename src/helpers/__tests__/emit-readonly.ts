jest.unmock('../emit-readonly');

import {FunctionDeclaration} from '../../elements/declarations/function';
import {IndexSignature} from '../../elements/index-signature';
import {emit_readonly} from '../emit-readonly';

const function_declaration: FunctionDeclaration = Object.create(FunctionDeclaration.prototype);
const index_signature: IndexSignature = Object.create(IndexSignature.prototype);

it('should return empty string while readonly is disabled', () => {
  expect(emit_readonly(false, index_signature)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration or IndexSignature', () => {
  expect(emit_readonly(true, function_declaration)).toBe('');
});

it('should return readonly prefix while readonly is enabled and owned is VariableDeclaration or IndexSignature', () => {
  expect(emit_readonly(true, index_signature)).toBe('readonly ');
});
