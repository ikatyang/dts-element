import {Member} from '../elements/member';
import {Stack} from '../stack';
import {emit_elements} from './emit-elements';
import {indent_every_line} from './indent-every-line';

export const emit_members = (children: Member[], stack: Stack): string =>
  (children.length === 0)
    ? '{}'
    : `{\n${indent_every_line(emit_elements(children, stack))}\n}`;
