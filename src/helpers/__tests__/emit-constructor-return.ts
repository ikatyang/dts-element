jest.unmock('../emit-constructor-return');

import {any_type} from '../../constants';
import {Element} from '../../element';
import {ClassMember} from '../../elements/members/class-member';
import {Stack} from '../../stack';
import {emit_constructor_return} from '../emit-constructor-return';

const element: Element = Object.create(Element.prototype);
const class_member: ClassMember = Object.create(ClassMember.prototype);

it('should return empty-string while last stack is Element-ClassMember', () => {
  expect(emit_constructor_return(any_type, new Stack([class_member, element]))).toBe('');
});

it('should return return-signature while stack is not Element-ClassMember', () => {
  expect(emit_constructor_return(any_type, new Stack())).toMatchSnapshot();
});
