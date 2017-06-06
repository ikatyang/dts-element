import * as ts from 'typescript';
import {create_function_declaration, IFunctionDeclaration} from '../declarations/function-declaration';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {parse_native} from '../parse';
import {create_function_type} from '../types/function-type';
import {if_defined} from '../utils';
import {parse_identifier} from './identifier';

export const parse_function_declaration = (node: ts.FunctionDeclaration): IFunctionDeclaration =>
  create_function_declaration({
    name: parse_identifier(node.name as ts.Identifier),
    type: create_function_type({
      generics: if_defined(node.typeParameters, generics => generics.map(parse_native) as IGenericDeclaration[]),
      parameters: if_defined(node.parameters, parameters => parameters.map(parse_native) as IParameterDeclaration[]),
      return: if_defined(node.type, parse_native),
    }),
  });
