import * as ts from 'typescript';
import { parse_native } from '../parse';
import { create_general_type, IGeneralType } from '../types/general-type';
import { if_defined } from '../utils';
import { parse_identifier } from './identifier';
import { parse_qualified_name } from './qualified-name';

export const parse_type_reference = (
  node: ts.TypeReferenceNode,
): IGeneralType => {
  const generics = if_defined(node.typeArguments, args =>
    args.map(parse_native),
  );
  if (node.typeName.kind === ts.SyntaxKind.Identifier) {
    const name = parse_identifier(node.typeName);
    return create_general_type({
      parents: undefined,
      name,
      generics,
    });
  }

  const names = parse_qualified_name(node.typeName);
  return create_general_type({
    parents: names.slice(0, -1),
    name: names[names.length - 1],
    generics,
  });
};
