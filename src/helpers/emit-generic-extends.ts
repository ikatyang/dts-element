import {Container} from '../collections';
// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
import {InterfaceDeclaration} from '../elements/declarations/interface';
// tslint:disable-next-line no-unused-variable
import {AnyType, Type} from '../elements/type';

export const emit_generic_extends = (generic_extends: AnyType | null, container: Container): string =>
  (generic_extends === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` extends ${generic_extends._emit(container)}`;
