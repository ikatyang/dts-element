import {Container} from '../collections';
import {Member} from '../elements/member';

export const emit_function = (container: Container): string =>
  !(container instanceof Member)
    ? 'function '
    : '';
