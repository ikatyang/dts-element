import * as ts from 'typescript';
import { parse_native } from '../parse';
import {
  create_conditional_type,
  IConditionalType,
} from '../types/conditional-type';

export const parse_conditional_type = (
  node: ts.ConditionalTypeNode,
): IConditionalType =>
  create_conditional_type({
    check: parse_native(node.checkType),
    extends: parse_native(node.extendsType),
    true: parse_native(node.trueType),
    false: parse_native(node.falseType),
  });
