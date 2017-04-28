import {Container, GenericDefault} from '../collections';
import {InterfaceDeclaration} from '../elements/declarations/interface';

// tslint:disable-next-line no-unused-variable
import {Type} from '../elements/type';

export const emit_generic_default = (generic_default: GenericDefault, container: Container): string =>
  (generic_default === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` = ${generic_default._emit(container)}`;
