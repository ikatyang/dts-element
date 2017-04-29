import {Container} from '../collections';
import {ClassMember} from '../elements/members/class';
import {Type} from '../elements/type';

export const emit_constructor_return = (return_type: Type, container: Container): string =>
  (container instanceof ClassMember)
    ? ''
    : `: ${return_type._emit(container)}`;
