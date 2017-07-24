import * as ts from 'typescript';
import { IGenericDeclaration } from '../declarations/generic-declaration';
import { IParameterDeclaration } from '../declarations/parameter-declaration';
import { parse_native } from '../parse';
import { create_function_type, IFunctionType } from '../types/function-type';
import { if_defined } from '../utils';

export const parse_function_type = (node: ts.FunctionTypeNode): IFunctionType =>
  create_function_type({
    generics: if_defined(
      node.typeParameters,
      generics => generics.map(parse_native) as IGenericDeclaration[],
    ),
    parameters: if_defined(
      node.parameters,
      parameters => parameters.map(parse_native) as IParameterDeclaration[],
    ),
    return: if_defined(node.type, parse_native),
  });
