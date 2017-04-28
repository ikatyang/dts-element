jest.unmock('../emit-object');

import {VariableDeclaration} from '../../elements/declarations/variable';
import {ObjectMember} from '../../elements/members/object';
import {emit_object} from '../emit-object';

it('should return empty object while there are no children', () => {
  expect(emit_object([], null)).toBe('{}');
});

it('should return indented members while there are children', () => {
  expect(emit_object([
    new ObjectMember({owned: new VariableDeclaration({name: 'x'})}),
    new ObjectMember({owned: new VariableDeclaration({name: 'y'})}),
  ], null)).toMatchSnapshot();
});
