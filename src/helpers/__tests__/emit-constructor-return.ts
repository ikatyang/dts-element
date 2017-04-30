jest.unmock('../emit-constructor-return');

import {any_type} from '../../constants';
import {ClassMember} from '../../elements/members/class-member';
import {emit_constructor_return} from '../emit-constructor-return';

const class_member: ClassMember = Object.create(ClassMember.prototype);

it('should return empty-string while container is ClassMember', () => {
  expect(emit_constructor_return(any_type, class_member)).toBe('');
});

it('should return return-signature while container is not ClassMember', () => {
  expect(emit_constructor_return(any_type, null)).toMatchSnapshot();
});
