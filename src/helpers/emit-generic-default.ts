import {Container} from '../collections';
// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
import {InterfaceDeclaration} from '../elements/declarations/interface';
// tslint:disable-next-line no-unused-variable
import {AnyType, Type} from '../elements/type';

export const emit_generic_default = (generic_default: AnyType | null, container: Container): string =>
  (generic_default === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` = ${generic_default._emit(container)}`;
