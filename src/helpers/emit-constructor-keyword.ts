import {Container} from '../collections';
import {ClassMember} from '../elements/members/class';

export const emit_constructor_keyword = (container: Container): string =>
  (container instanceof ClassMember)
    ? 'constructor'
    : 'new';
