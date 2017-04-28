import {Container} from '../collections';
import {InterfaceDeclaration} from '../elements/declarations/interface';
import {Type} from '../elements/type';

export const emit_generic_extends = (generic_extends: Type | null, container: Container): string =>
  (generic_extends === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` extends ${generic_extends._emit(container)}`;
