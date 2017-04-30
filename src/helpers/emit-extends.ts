import {Container} from '../collections';
import {InterfaceDeclaration} from '../elements/declarations/interface-declaration';
import {Type} from '../elements/type';

export const emit_extends = (an_extends: Type | null, container: Container): string =>
  (an_extends === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` extends ${an_extends._emit(container)}`;
