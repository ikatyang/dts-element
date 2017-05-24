import * as ts from 'typescript';
import {create_generic_declaration, IGenericDeclaration} from '../declarations/generic-declaration';
import {parse_native} from '../parse';
import {if_defined} from '../utils';

export const parse_type_parameter = (node: ts.TypeParameterDeclaration): IGenericDeclaration =>
  create_generic_declaration({
    name: node.name.text,
    extends: if_defined(node.constraint, parse_native),
    defalut: if_defined(node.default, parse_native),
  });
