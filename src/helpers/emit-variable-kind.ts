import {VariableKind} from '../elements/declarations/variable-declaration';
import {Member} from '../elements/member';
import {Stack} from '../stack';

export const emit_variable_kind = (kind: VariableKind, stack: Stack): string =>
  (stack.last_instances_of([Member as any]))
    ? ''
    : `${kind} `;
