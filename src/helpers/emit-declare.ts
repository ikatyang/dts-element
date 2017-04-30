import {Document} from '../elements/document';
import {Stack} from '../stack';

export const emit_declare = (stack: Stack): string =>
  stack.last_instances_of([Document])
    ? 'declare '
    : '';
