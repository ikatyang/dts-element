import {ClassDeclaration} from '../elements/declarations/class-declaration';
import {InterfaceDeclaration} from '../elements/declarations/interface-declaration';
import {TypeDeclaration} from '../elements/declarations/type-declaration';

export const emit_declaration_type_name =
  (a_class: string | ClassDeclaration | InterfaceDeclaration | TypeDeclaration): string =>
    (typeof a_class === 'string')
      ? a_class
      : a_class.parameters.name;
