import * as ts from 'typescript';
import {parse_native} from '../parse';
import {create_union_type, IUnionType} from '../types/union-type';

export const parse_union_type = (node: ts.UnionTypeNode): IUnionType =>
  create_union_type({
    types: node.types.map(parse_native),
  });
