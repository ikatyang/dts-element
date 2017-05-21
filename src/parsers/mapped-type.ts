import * as ts from 'typescript';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {parse_native} from '../parse';
import {create_mapped_type, IMappedType} from '../types/mapped-type';
import {if_defined} from '../utils';

export const parse_mapped_type = (node: ts.MappedTypeNode): IMappedType =>
  create_mapped_type({
    parameter: parse_native(node.typeParameter) as IGenericDeclaration,
    readonly: if_defined(node.readonlyToken, () => true),
    optional: if_defined(node.questionToken, () => true),
    type: if_defined(node.type, parse_native),
  });
