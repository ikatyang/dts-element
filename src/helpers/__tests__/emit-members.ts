jest.unmock('../emit-members');

import {VariableDeclaration} from '../../elements/declarations/variable-declaration';
import {ObjectMember} from '../../elements/members/object-member';
import {emit_members} from '../emit-members';

it('should return empty object while there are no children', () => {
  expect(emit_members([], null)).toBe('{}');
});

it('should return indented members while there are children', () => {
  expect(emit_members([
    new ObjectMember({owned: new VariableDeclaration({name: 'x'})}),
    new ObjectMember({owned: new VariableDeclaration({name: 'y'})}),
  ], null)).toMatchSnapshot();
});
