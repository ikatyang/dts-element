import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {transform_generic_declaration, IGenericDeclaration} from '../declarations/generic-declaration';
import {transform_parameter_declaration, IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IFunctionTypeOptions {
  return?: IType;
  generics?: IGenericDeclaration[];
  parameters?: IParameterDeclaration[];
}

export interface IFunctionType
  extends IElement<ElementKind.FunctionType>, IFunctionTypeOptions {}

export const create_function_type = (options: IFunctionTypeOptions = {}): IFunctionType => ({
  ...create_element(ElementKind.FunctionType),
  ...options,
});

// tslint:disable:ter-indent
export const transform_function_type = (element: IFunctionType, path: IElement<any>[]) =>
  ts.createFunctionTypeNode(
    /* typeParameters  */ element.generics && element.generics.map(
                            generic => transform_generic_declaration(generic, [...path, element]),
                          ),
    /* parameters      */ (element.parameters || []).map(
                            parameter => transform_parameter_declaration(parameter, [...path, element]),
                          ),
    /* type            */ transform(element.return || any_type, [...path, element]) as ts.TypeNode,
  );
