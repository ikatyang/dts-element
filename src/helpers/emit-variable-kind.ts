import {Declaration} from '../elements/declaration';
import {VariableKind} from '../elements/declarations/variable-declaration';
import {Member} from '../elements/member';
import {Stack} from '../stack';

const is_member_stack = (stack: Stack): boolean =>
  stack.last_instances_of([Member as any]) || stack.last_instances_of([Declaration as any, Member as any]);

export const emit_variable_kind = (kind: VariableKind, stack: Stack): string =>
  is_member_stack(stack)
    ? ''
    : `${kind} `;
