jest.unmock('../emit-enum-members');

import {VariableDeclaration} from '../../elements/declarations/variable-declaration';
import {EnumMember} from '../../elements/members/enum-member';
import {Stack} from '../../stack';
import {emit_enum_members} from '../emit-enum-members';

it('should return empty-object string while there is no members', () => {
  expect(emit_enum_members([], new Stack())).toBe('{}');
});

it('should return joined emitted declaration', () => {
  expect(emit_enum_members([
    new EnumMember({owned: new VariableDeclaration({name: 'a'}), value: null}),
    new EnumMember({owned: new VariableDeclaration({name: 'b'}), value: 5}),
    new EnumMember({owned: new VariableDeclaration({name: 'c'}), value: null}),
  ], new Stack())).toMatchSnapshot();
});
