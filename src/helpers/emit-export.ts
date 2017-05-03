import {Element} from '../element';
import {ModuleDeclaration} from '../elements/declarations/module-declaration';
import {Document} from '../elements/document';
import {Stack} from '../stack';

const is_exportable_stack = (stack: Stack): boolean =>
  stack.last_instances_of([Element as any, Document]) ||
  stack.last_instances_of([Element as any, ModuleDeclaration]);

export const emit_export = (has_export: boolean, stack: Stack): string =>
  (has_export && is_exportable_stack(stack))
    ? 'export '
    : '';
