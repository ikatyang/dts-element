import * as ts from 'typescript';
import { parse_native } from '../parse';
import { create_keyof_type, IKeyofType } from '../types/keyof-type';

export const parse_type_operator = (node: ts.TypeOperatorNode): IKeyofType =>
  create_keyof_type({
    type: parse_native(node.type),
  });
