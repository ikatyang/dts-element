jest.unmock('../emit-constructor-return');

import {any_type} from '../../constants';
import {ClassMember} from '../../elements/members/class-member';
import {Stack} from '../../stack';
import {emit_constructor_return} from '../emit-constructor-return';

const class_member: ClassMember = Object.create(ClassMember.prototype);

it('should return empty-string while stack is ClassMember', () => {
  expect(emit_constructor_return(any_type, new Stack([class_member]))).toBe('');
});

it('should return return-signature while stack is not ClassMember', () => {
  expect(emit_constructor_return(any_type, new Stack())).toMatchSnapshot();
});
