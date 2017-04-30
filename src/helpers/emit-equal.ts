import {Container} from '../collections';
import {InterfaceDeclaration} from '../elements/declarations/interface-declaration';
import {Type} from '../elements/type';

export const emit_equal = (generic_default: Type | null, container: Container): string =>
  (generic_default === null) || !(container instanceof InterfaceDeclaration)
    ? ''
    : ` = ${generic_default._emit(container)}`;
