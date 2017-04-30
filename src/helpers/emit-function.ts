import {Member} from '../elements/member';
import {Stack} from '../stack';

export const emit_function = (stack: Stack): string =>
  !(stack.last_instances_of([Member as any]))
    ? 'function '
    : '';
