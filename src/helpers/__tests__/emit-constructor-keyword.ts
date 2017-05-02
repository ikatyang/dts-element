jest.unmock('../emit-constructor-keyword');

import {Element} from '../../element';
import {ClassMember} from '../../elements/members/class-member';
import {Stack} from '../../stack';
import {emit_constructor_keyword} from '../emit-constructor-keyword';

const element: Element = Object.create(Element.prototype);
const class_member: ClassMember = Object.create(ClassMember.prototype);

it('should return "constructor" while last stack is Element-ClassMember', () => {
  expect(emit_constructor_keyword(new Stack([class_member, element]))).toBe('constructor');
});

it('should return "new" while last stack is not Element-ClassMember', () => {
  expect(emit_constructor_keyword(new Stack())).toBe('new');
});
