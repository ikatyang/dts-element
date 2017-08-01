import * as ts from 'typescript';
import { IType } from '../collections';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { create_qualified_name, create_type_nodes } from '../utils';

export interface IGeneralTypeOptions extends IElementOptions {
  parents?: string[];
  name: string;
  generics?: IType[];
}

export interface IGeneralType
  extends IElement<ElementKind.GeneralType>,
    IGeneralTypeOptions {}

export const create_general_type = (
  options: IGeneralTypeOptions,
): IGeneralType => ({
  ...create_element(ElementKind.GeneralType),
  ...options,
});

export const is_general_type = (value: any): value is IGeneralType =>
  is_element(value) && value.kind === ElementKind.GeneralType;

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_general_type = (
  element: IGeneralType,
  path: IElement<any>[],
) =>
  ts.createTypeReferenceNode(
    /* typeName      */ element.parents === undefined ||
    element.parents.length === 0
      ? element.name
      : create_qualified_name([...element.parents, element.name]),
    /* typeArguments */ create_type_nodes(element.generics, path),
  );
