import * as ts from 'typescript';
import {create_typeof_type, ITypeofType} from '../types/typeof-type';
import {parse_identifier} from './identifier';
import {parse_qualified_name} from './qualified-name';

export const parse_type_query = (node: ts.TypeQueryNode): ITypeofType => {
  if (node.exprName.kind === ts.SyntaxKind.Identifier) {
    const name = parse_identifier(node.exprName);
    return create_typeof_type({
      parents: undefined,
      name,
    });
  } else {
    const names = parse_qualified_name(node.exprName);
    return create_typeof_type({
      parents: names.slice(0, -1),
      name: names[names.length - 1],
    });
  }
};
