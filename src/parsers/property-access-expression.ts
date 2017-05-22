import * as ts from 'typescript';

export const parse_property_access_expression = (node: ts.PropertyAccessExpression): string[] => {
  const expressions: ts.Expression[] = [node.name];
  let current = node.expression;
  while (current.kind === ts.SyntaxKind.PropertyAccessExpression) {
    const access_expression = current as ts.PropertyAccessExpression;
    expressions.unshift(access_expression.name);
    current = access_expression.expression;
  }
  expressions.unshift(current);
  return expressions.map(expression =>
    (expression.kind === ts.SyntaxKind.Identifier)
      ? (expression as ts.Identifier).text
      : (() => {
        throw new Error(`Unexpected ts-kind ${node.kind} ( ${ts.SyntaxKind[node.kind]} )`);
      })(),
  );
};
