import {Element} from '../element';
import {ClassMember} from '../elements/members/class-member';
import {Stack} from '../stack';

export const emit_constructor_keyword = (stack: Stack): string =>
  (stack.last_instances_of([Element as any, ClassMember]))
    ? 'constructor'
    : 'new';
