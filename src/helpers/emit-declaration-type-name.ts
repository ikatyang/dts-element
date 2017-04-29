import {ClassDeclaration} from '../elements/declarations/class';
import {InterfaceDeclaration} from '../elements/declarations/interface';

export const emit_declaration_type_name = (a_class: string | ClassDeclaration | InterfaceDeclaration): string =>
  (typeof a_class === 'string')
    ? a_class
    : a_class.parameters.name;
