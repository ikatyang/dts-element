import * as ts from 'typescript';
import {
  create_variable_declaration,
  IVariableDeclaration,
} from '../declarations/variable-declaration';
import { parse_native } from '../parse';
import { if_defined } from '../utils';
import { parse_identifier } from './identifier';

export const parse_enum_member = (node: ts.EnumMember): IVariableDeclaration =>
  create_variable_declaration({
    name: parse_identifier(node.name as ts.Identifier),
    type: if_defined(node.initializer, parse_native),
  });
