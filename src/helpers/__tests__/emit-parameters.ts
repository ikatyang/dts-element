jest.unmock('../emit-parameters');

import {Parameter} from '../../elements/parameter';
import {Stack} from '../../stack';
import {emit_parameters} from '../emit-parameters';

it('should return correctly', () => {
  const name_a = 'a';
  const name_b = 'b';
  expect(emit_parameters([
    new Parameter({name: name_a}),
    new Parameter({name: name_b}),
  ], new Stack())).toMatchSnapshot();
});
