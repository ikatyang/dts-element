jest.unmock('../emit-constructor-keyword');

import {ClassMember} from '../../elements/members/class-member';
import {Stack} from '../../stack';
import {emit_constructor_keyword} from '../emit-constructor-keyword';

const class_member: ClassMember = Object.create(ClassMember.prototype);

it('should return "constructor" while stack is ClassMember', () => {
  expect(emit_constructor_keyword(new Stack([class_member]))).toBe('constructor');
});

it('should return "new" while stack is not ClassMember', () => {
  expect(emit_constructor_keyword(new Stack())).toBe('new');
});
