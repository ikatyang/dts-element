import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_element, IElement, IElementOptions} from '../element';
import {ITypePredicate} from '../others/type-predicate';
import {transform} from '../transform';
import {create_type_parameters} from '../utils';

export interface IFunctionTypeOptions extends IElementOptions {
  return?: IType | ITypePredicate;
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

/**
 * @hidden
 */
export const transform_function_type = (element: IFunctionType, path: IElement<any>[]) =>
  ts.createFunctionTypeNode(
    /* typeParameters  */ create_type_parameters(element.generics, path),
    /* parameters      */ (element.parameters || []).map(
                            parameter => transform(parameter, path) as ts.ParameterDeclaration,
                          ),
    /* type            */ transform(element.return || any_type, path) as ts.TypeNode,
  );
