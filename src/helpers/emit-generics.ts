import {Type} from '../elements/type';
import {Stack} from '../stack';
import {emit_elements} from './emit-elements';

export const emit_generics = (generics: Type[], stack: Stack): string =>
  (generics.length === 0)
    ? ''
    : `<${emit_elements(generics, stack, ', ')}>`;
