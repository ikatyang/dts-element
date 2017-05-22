import * as ts from 'typescript';
import {create_enum_declaration, IEnumDeclaration} from '../declarations/enum-declaration';
import {IVariableDeclaration} from '../declarations/variable-declaration';
import {parse_native} from '../parse';
import {parse_identifier} from './identifier';

export const parse_enum_declaration = (node: ts.EnumDeclaration): IEnumDeclaration =>
  create_enum_declaration({
    name: parse_identifier(node.name),
    members: node.members.map(parse_native) as IVariableDeclaration[],
  });
