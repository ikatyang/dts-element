import * as ts from 'typescript';
import { IType } from '../collections';
import { parse_native } from '../parse';
import { create_tuple_type, ITupleType } from '../types/tuple-type';

export const parse_tuple_type = (node: ts.TupleTypeNode): ITupleType =>
  create_tuple_type({
    types: node.elementTypes.map(type => parse_native(type) as IType),
  });
