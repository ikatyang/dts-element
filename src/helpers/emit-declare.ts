import {Container} from '../collections';
// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
import {Document} from '../elements/document';

export const emit_declare = (container: Container): string =>
  (container === null) || (container instanceof Document)
    ? 'declare '
    : '';
