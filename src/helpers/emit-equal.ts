import {InterfaceDeclaration} from '../elements/declarations/interface-declaration';
import {Type} from '../elements/type';
import {Stack} from '../stack';

export const emit_equal = (generic_default: Type | null, stack: Stack): string =>
  (generic_default === null) || !(stack.last_instances_of([InterfaceDeclaration]))
    ? ''
    : ` = ${generic_default.emit(stack)}`;
