import * as ts from 'typescript';
import { parse_native } from '../parse';
import { create_array_type, IArrayType } from '../types/array-type';

export const parse_array_type = (node: ts.ArrayTypeNode): IArrayType =>
  create_array_type({
    type: parse_native(node.elementType),
  });
