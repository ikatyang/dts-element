import {GenericDefinition} from '../elements/generic-definition';
import {EnumMember} from '../elements/members/enum-member';
import {Type} from '../elements/type';
import {Stack} from '../stack';

export const emit_equal = (value: Type | number | null, stack: Stack): string =>
  (value === null) || !(stack.last_instances_of([GenericDefinition]) || stack.last_instances_of([EnumMember]))
    ? ''
    : (typeof value === 'number')
      ? ` = ${value}`
      : ` = ${value.emit(stack)}`;
