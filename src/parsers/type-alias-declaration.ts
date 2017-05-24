import * as ts from 'typescript';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {create_type_declaration, ITypeDeclaration} from '../declarations/type-declaration';
import {parse_native} from '../parse';
import {has_kind, if_defined} from '../utils';
import {parse_identifier} from './identifier';

export const parse_type_alias_declaration = (node: ts.TypeAliasDeclaration): ITypeDeclaration =>
  create_type_declaration({
    name: parse_identifier(node.name),
    export: has_kind(node.modifiers, ts.SyntaxKind.ExportKeyword),
    generics: if_defined(node.typeParameters, generics => generics.map(parse_native) as IGenericDeclaration[]),
    type: parse_native(node.type),
  });
