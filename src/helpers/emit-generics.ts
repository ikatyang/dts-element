import {GenericDefinition} from '../elements/generic-definition';
import {Type} from '../elements/type';
import {GenericType} from '../elements/types/generic-type';
import {Stack} from '../stack';
import {emit_elements} from './emit-elements';

const normalize_generics = (generics: Type[], is_definition: boolean): Type[] =>
  generics.map((generic: Type) => !(generic instanceof GenericType) || !is_definition
    ? generic
    : new GenericDefinition({owned: generic}));

export const emit_generics = (generics: Type[], stack: Stack, is_definition: boolean = false): string =>
  (generics.length === 0)
    ? ''
    : `<${emit_elements(normalize_generics(generics, is_definition), stack, ', ')}>`;
