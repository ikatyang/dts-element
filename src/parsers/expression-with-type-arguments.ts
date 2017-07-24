import * as ts from 'typescript';
import { parse_native } from '../parse';
import { create_general_type, IGeneralType } from '../types/general-type';
import { if_defined } from '../utils';
import { parse_identifier } from './identifier';
import { parse_property_access_expression } from './property-access-expression';

export const parse_expression_with_type_arguments = (
  node: ts.ExpressionWithTypeArguments,
): IGeneralType => {
  const generics = if_defined(node.typeArguments, type_args =>
    type_args.map(parse_native),
  );
  if (node.expression.kind === ts.SyntaxKind.Identifier) {
    const name = parse_identifier(node.expression as ts.Identifier);
    return create_general_type({
      name,
      generics,
    });
  }

  const names = parse_property_access_expression(
    node.expression as ts.PropertyAccessExpression,
  );
  return create_general_type({
    parents: names.slice(0, -1),
    name: names[names.length - 1],
    generics,
  });
};
