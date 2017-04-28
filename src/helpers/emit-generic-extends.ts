import {Container, GenericExtends} from '../collections';
import {InterfaceDeclaration} from '../elements/declarations/interface';

// tslint:disable-next-line no-unused-variable
import {Type} from '../elements/type';

export const emit_generic_extends = (generic_extends: GenericExtends, container: Container): string =>
  (generic_extends === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` extends ${generic_extends._emit(container)}`;
