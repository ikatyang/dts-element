jest.unmock('../emit-elements');

import {VariableDeclaration} from '../../elements/declarations/variable';
import {emit_elements} from '../emit-elements';

it('should return joined emitted declaration', () => {
  const name_a = 'a';
  const name_b = 'b';
  expect(emit_elements([
    new VariableDeclaration({name: name_a}),
    new VariableDeclaration({name: name_b}),
  ], null)).toBe(`[VariableDeclaration ${name_a}]\n[VariableDeclaration ${name_b}]`);
});
