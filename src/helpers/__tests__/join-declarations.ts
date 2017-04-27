jest.unmock('../join-declarations.ts');

import {VariableDeclaration} from '../../elements/declarations/variable';
import {join_declarations} from '../join-declarations';

it('should return joined emitted declaration', () => {
  const name_a = 'a';
  const name_b = 'b';
  expect(join_declarations([
    new VariableDeclaration({name: name_a}),
    new VariableDeclaration({name: name_b}),
  ], null)).toBe(`[VariableDeclaration ${name_a}]\n[VariableDeclaration ${name_b}]`);
});
