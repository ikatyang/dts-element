import * as ts from 'typescript';
import { this_type } from '../constants';
import {
  create_type_predicate,
  ITypePredicate,
} from '../others/type-predicate';
import { parse_native } from '../parse';

export const parse_type_predicater = (
  node: ts.TypePredicateNode,
): ITypePredicate =>
  create_type_predicate({
    parameter:
      node.parameterName.kind === ts.SyntaxKind.Identifier
        ? node.parameterName.text
        : this_type,
    type: parse_native(node.type),
  });
