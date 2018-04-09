import * as ts from 'typescript';
import { parse_identifier } from './identifier';

export const parse_property_access_expression = (
  node: ts.PropertyAccessExpression,
): string[] => {
  const expressions: ts.Expression[] = [node.name];
  let current = node.expression;
  while (current.kind === ts.SyntaxKind.PropertyAccessExpression) {
    const access_expression = current as ts.PropertyAccessExpression;
    expressions.unshift(access_expression.name);
    current = access_expression.expression;
  }
  expressions.unshift(current);
  return expressions.map(expression =>
    parse_identifier(expression as ts.Identifier),
  );
};
