import * as ts from 'typescript';

export const parse_qualified_name = (node: ts.QualifiedName): string[] => {
  const names = [node.right.text];
  let current_node = node.left;
  while (current_node.kind === ts.SyntaxKind.QualifiedName) {
    names.unshift(current_node.right.text);
    current_node = current_node.left;
  }
  names.unshift(current_node.text);
  return names;
};
