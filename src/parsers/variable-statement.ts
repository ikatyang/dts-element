import * as ts from 'typescript';
import {any_type} from '../constants';
import {create_variable_declaration, IVariableDeclaration} from '../declarations/variable-declaration';
import {parse_native} from '../parse';
import {has_kind} from '../utils';

export const parse_variable_statement = (node: ts.VariableStatement): IVariableDeclaration =>
  create_variable_declaration({
    export: has_kind(node.modifiers, ts.SyntaxKind.ExportKeyword),
    name: (node.declarationList.declarations[0].name as ts.Identifier).text,
    type: parse_native(node.declarationList.declarations[0].type || any_type.type),
    const: (node.declarationList.flags & ts.NodeFlags.Const) !== 0,
    let: (node.declarationList.flags & ts.NodeFlags.Let) !== 0,
  });
