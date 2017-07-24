import * as ts from 'typescript';
import {
  create_parameter_declaration,
  IParameterDeclaration,
} from '../declarations/parameter-declaration';
import { parse_native } from '../parse';
import { IArrayType } from '../types/array-type';
import { if_defined } from '../utils';

export const parse_parameter_declaration = (
  node: ts.ParameterDeclaration,
): IParameterDeclaration => {
  const rest = if_defined(node.dotDotDotToken, () => true);
  return create_parameter_declaration({
    name: (node.name as ts.Identifier).text,
    type:
      rest === true
        ? if_defined(node.type, type => (parse_native(type) as IArrayType).type)
        : if_defined(node.type, parse_native),
    rest,
    optional: if_defined(node.questionToken, () => true),
  });
};
