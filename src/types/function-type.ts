import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_element, IElement, IElementOptions} from '../element';
import {ITypePredicate} from '../others/type-predicate';
import {transform} from '../transform';

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

export const transform_function_type = (element: IFunctionType, path: IElement<any>[]) =>
  ts.createFunctionTypeNode(
    /* typeParameters  */ element.generics && element.generics.map(
                            generic => transform(generic, path) as ts.TypeParameterDeclaration,
                          ),
    /* parameters      */ (element.parameters || []).map(
                            parameter => transform(parameter, path) as ts.ParameterDeclaration,
                          ),
    /* type            */ transform(element.return || any_type, path) as ts.TypeNode,
  );
