import * as ts from 'typescript';
import { IType } from '../collections';
import { any_type, ElementKind } from '../constants';
import { IGenericDeclaration } from '../declarations/generic-declaration';
import { IParameterDeclaration } from '../declarations/parameter-declaration';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { transform } from '../transform';
import { create_type_parameters } from '../utils';

export interface IConstructorTypeOptions extends IElementOptions {
  return?: IType;
  generics?: IGenericDeclaration[];
  parameters?: IParameterDeclaration[];
}

export interface IConstructorType
  extends IElement<ElementKind.ConstructorType>,
    IConstructorTypeOptions {}

export const create_constructor_type = (
  options: IConstructorTypeOptions = {},
): IConstructorType => ({
  ...create_element(ElementKind.ConstructorType),
  ...options,
});

export const is_constructor_type = (value: any): value is IConstructorType =>
  is_element(value) && value.kind === ElementKind.ConstructorType;

/**
 * @hidden
 */
// tslint:disable:ter-indent
export const transform_constructor_type = (
  element: IConstructorType,
  path: IElement<any>[],
) =>
  ts.createConstructorTypeNode(
    /* typeParameters  */ create_type_parameters(element.generics, path),
    /* parameters      */ (element.parameters || []).map(
      parameter => transform(parameter, path) as ts.ParameterDeclaration,
    ),
    /* type            */ transform(
      element.return || any_type,
      path,
    ) as ts.TypeNode,
  );
