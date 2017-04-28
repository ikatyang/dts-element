import {Container} from '../collections';
import {Document} from '../elements/document';

export const emit_declare = (container: Container): string =>
  (container === null) || (container instanceof Document)
    ? 'declare '
    : '';
