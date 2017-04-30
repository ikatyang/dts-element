import {InterfaceDeclaration} from '../elements/declarations/interface-declaration';
import {Type} from '../elements/type';
import {Stack} from '../stack';

export const emit_extends = (an_extends: Type | null, stack: Stack): string =>
  (an_extends === null) || !(stack.last_instances_of([InterfaceDeclaration]))
    ? ''
    : ` extends ${an_extends.emit(stack)}`;
