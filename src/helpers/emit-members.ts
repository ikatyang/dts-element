import {Element} from '../element';
import {Stack} from '../stack';
import {emit_elements} from './emit-elements';
import {indent_every_line} from './indent-every-line';

export const emit_members = (children: Element[], stack: Stack): string =>
  (children.length === 0)
    ? '{}'
    : `{\n${indent_every_line(emit_elements(children, stack))}\n}`;
