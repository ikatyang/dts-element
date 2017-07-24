import * as ts from 'typescript';
import { IType } from '../collections';
import { parse_native } from '../parse';

export const parse_parenthesized_type = (
  node: ts.ParenthesizedTypeNode,
): IType => parse_native(node.type);
