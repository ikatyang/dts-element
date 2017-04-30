import {ClassMember} from '../elements/members/class-member';
import {Type} from '../elements/type';
import {Stack} from '../stack';

export const emit_constructor_return = (return_type: Type, stack: Stack): string =>
  (stack.last_instances_of([ClassMember]))
    ? ''
    : `: ${return_type.emit(stack)}`;
