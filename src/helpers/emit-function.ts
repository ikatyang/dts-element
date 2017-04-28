import {Container} from '../collections';
// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
import {Member} from '../elements/member';

export const emit_function = (container: Container): string =>
  !(container instanceof Member)
    ? 'function '
    : '';
