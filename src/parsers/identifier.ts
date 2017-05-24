import * as ts from 'typescript';

export const parse_identifier = (node: ts.Identifier): string =>
  node.text;
