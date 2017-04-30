jest.unmock('../emit-elements');

import {VariableDeclaration} from '../../elements/declarations/variable-declaration';
import {emit_elements} from '../emit-elements';

it('should return joined emitted declaration', () => {
  expect(emit_elements([
    new VariableDeclaration({name: 'a'}),
    new VariableDeclaration({name: 'b'}),
  ], null)).toMatchSnapshot();
});
