import * as ts from 'typescript';
import { parse_native } from '../parse';
import { create_sub_type, ISubType } from '../types/sub-type';

export const parse_indexed_access_type = (
  node: ts.IndexedAccessTypeNode,
): ISubType =>
  create_sub_type({
    object: parse_native(node.objectType),
    index: parse_native(node.indexType),
  });
