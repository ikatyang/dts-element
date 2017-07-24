import * as ts from 'typescript';
import { IParameterDeclaration } from '../declarations/parameter-declaration';
import {
  create_index_signature,
  IIndexSignature,
} from '../others/index-signature';
import { parse_native } from '../parse';
import { has_kind, if_defined } from '../utils';

export const parse_index_signature = (
  node: ts.IndexSignatureDeclaration,
): IIndexSignature =>
  create_index_signature({
    parameter: node.parameters.map(parse_native)[0] as IParameterDeclaration,
    readonly: has_kind(node.modifiers, ts.SyntaxKind.ReadonlyKeyword),
    type: if_defined(node.type, parse_native),
  });
