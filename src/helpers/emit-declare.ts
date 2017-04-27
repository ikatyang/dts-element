// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
import {Document} from '../elements/document';

export const emit_declare = (container: AnyElement | null): string =>
  (container === null) || (container instanceof Document)
    ? 'declare '
    : '';
