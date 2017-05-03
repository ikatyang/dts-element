import {GenericDefinition} from '../elements/generic-definition';
import {Type} from '../elements/type';
import {GenericType} from '../elements/types/generic-type';
import {Stack} from '../stack';

export const emit_extends = (an_extends: Type | null, stack: Stack): string =>
  (an_extends === null) || !(stack.last_instances_of([GenericType, GenericDefinition]))
    ? ''
    : ` extends ${an_extends.emit(stack)}`;
