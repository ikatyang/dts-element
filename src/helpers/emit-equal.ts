import {GenericDefinition} from '../elements/generic-definition';
import {Type} from '../elements/type';
import {Stack} from '../stack';

export const emit_equal = (generic_default: Type | null, stack: Stack): string =>
  (generic_default === null) || !(stack.last_instances_of([GenericDefinition]))
    ? ''
    : ` = ${generic_default.emit(stack)}`;
