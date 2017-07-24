import * as ts from 'typescript';
import { parse_native } from '../parse';
import { create_sub_type, ISubType } from '../types/sub-type';

export const parse_indexed_access_type = (
  node: ts.IndexedAccessTypeNode,
): ISubType => {
  const types = [node.objectType, node.indexType];
  while (types[types.length - 1].kind === ts.SyntaxKind.IndexedAccessType) {
    const last_type = types[types.length - 1] as ts.IndexedAccessTypeNode;
    types.push(last_type.indexType);
  }
  return create_sub_type({
    types: types.map(parse_native),
  });
};
