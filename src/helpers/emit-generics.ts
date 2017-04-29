import {Container} from '../collections';
import {Type} from '../elements/type';
import {emit_elements} from './emit-elements';

export const emit_generics = (generics: Type[], container: Container): string =>
  (generics.length === 0)
    ? ''
    : `<${emit_elements(generics, container, ', ')}>`;
