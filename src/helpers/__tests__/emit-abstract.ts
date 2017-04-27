import {VariableDeclaration} from '../../elements/declarations/variable';
import {emit_abstract} from '../emit-abstract';

const invalid = null as any; // TODO

it('should return empty string while abstract is disabled', () => {
  expect(emit_abstract(false, invalid)).toBe('');
});

it('should return empty string while owned is not VariableDeclaration', () => {
  expect(emit_abstract(true, invalid)).toBe('');
});

it('should return abstract prefix while abstract is enabled and owned is VariableDeclaration', () => {
  const variable_declaration = Object.create(VariableDeclaration.prototype);
  expect(emit_abstract(true, variable_declaration)).toBe('abstract ');
});
