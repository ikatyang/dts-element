import * as ts from 'typescript';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {parse_native} from '../parse';
import {create_constructor_type, IConstructorType} from '../types/constructor-type';
import {if_defined} from '../utils';

export const parse_constructor_type = (node: ts.ConstructorTypeNode): IConstructorType =>
  create_constructor_type({
    generics: if_defined(node.typeParameters, generics => generics.map(parse_native) as IGenericDeclaration[]),
    parameters: if_defined(node.parameters, parameters => parameters.map(parse_native) as IParameterDeclaration[]),
    return: if_defined(node.type, parse_native),
  });
