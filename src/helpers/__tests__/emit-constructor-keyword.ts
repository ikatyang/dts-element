jest.unmock('../emit-constructor-keyword');

import {ClassMember} from '../../elements/members/class-member';
import {emit_constructor_keyword} from '../emit-constructor-keyword';

const class_member: ClassMember = Object.create(ClassMember.prototype);

it('should return "constructor" while container is ClassMember', () => {
  expect(emit_constructor_keyword(class_member)).toBe('constructor');
});

it('should return "new" while container is not ClassMember', () => {
  expect(emit_constructor_keyword(null)).toBe('new');
});
