import * as ts from 'typescript';
import { create_variable_declaration } from '../declarations/variable-declaration';
import { create_object_member, IObjectMember } from '../members/object-member';
import { parse_native } from '../parse';
import { has_kind, if_defined } from '../utils';

export const parse_property_signature = (
  node: ts.PropertySignature,
): IObjectMember =>
  create_object_member({
    owned: create_variable_declaration({
      name:
        node.name.kind === ts.SyntaxKind.NumericLiteral
          ? +(node.name as ts.NumericLiteral).text
          : (node.name as ts.Identifier).text,
      type: if_defined(node.type, parse_native),
    }),
    readonly: has_kind(node.modifiers, ts.SyntaxKind.ReadonlyKeyword),
    optional: if_defined(node.questionToken, () => true),
  });
