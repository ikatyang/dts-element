import * as ts from 'typescript';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {create_interface_declaration, IInterfaceDeclaration} from '../declarations/interface-declaration';
import {IObjectMember} from '../members/object-member';
import {parse_native} from '../parse';
import {IGeneralType} from '../types/general-type';
import {create_object_type} from '../types/object-type';
import {has_kind, if_defined} from '../utils';
import {parse_identifier} from './identifier';

export const parse_interface_declaration = (node: ts.InterfaceDeclaration): IInterfaceDeclaration =>
  create_interface_declaration({
    name: parse_identifier(node.name as ts.Identifier),
    export: has_kind(node.modifiers, ts.SyntaxKind.ExportKeyword),
    generics: if_defined(node.typeParameters, generics => generics.map(parse_native) as IGenericDeclaration[]),
    extends: if_defined(node.heritageClauses, heritage_clauses =>
      heritage_clauses[0].types.map(parse_native) as IGeneralType[]),
    type: create_object_type({
      members: node.members.map(parse_native) as IObjectMember[],
    }),
  });
