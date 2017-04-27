jest.unmock('../emit-readonly');

import {IndexSignature} from '../../elements/index-signature';
import {emit_readonly} from '../emit-readonly';

const invalid = null as any; // TODO: FunctionDeclaration
const index_signature: IndexSignature = Object.create(IndexSignature.prototype);

it('should return empty string while readonly is disabled', () => {
  expect(emit_readonly(false, index_signature)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration or IndexSignature', () => {
  expect(emit_readonly(true, invalid)).toBe('');
});

it('should return readonly prefix while readonly is enabled and owned is VariableDeclaration or IndexSignature', () => {
  expect(emit_readonly(true, index_signature)).toBe('readonly ');
});
