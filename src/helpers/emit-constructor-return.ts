import {Element} from '../element';
import {ClassMember} from '../elements/members/class-member';
import {Type} from '../elements/type';
import {Stack} from '../stack';

export const emit_constructor_return = (return_type: Type, stack: Stack): string =>
  (stack.last_instances_of([Element as any, ClassMember]))
    ? ''
    : `: ${return_type.emit(stack)}`;
