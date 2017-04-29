import {ClassDeclaration} from '../elements/declarations/class';

export const emit_class_name = (a_class: string | ClassDeclaration): string =>
  (typeof a_class === 'string')
    ? a_class
    : a_class.parameters.name;
