import {Document} from '../elements/document';
import {Stack} from '../stack';

export const emit_export = (has_export: boolean, stack: Stack): string =>
  (has_export && stack.last_instances_of([Document]))
    ? 'export '
    : '';
