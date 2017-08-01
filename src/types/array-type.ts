import * as ts from 'typescript';
import { IType } from '../collections';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { transform } from '../transform';

export interface IArrayTypeOptions extends IElementOptions {
  type: IType;
}

export interface IArrayType
  extends IElement<ElementKind.ArrayType>,
    IArrayTypeOptions {}

export const create_array_type = (options: IArrayTypeOptions): IArrayType => ({
  ...create_element(ElementKind.ArrayType),
  ...options,
});

export const is_array_type = (value: any): value is IArrayTypeOptions =>
  is_element(value) && value.kind === ElementKind.ArrayType;

/**
 * @hidden
 */
export const transform_array_type = (
  element: IArrayType,
  path: IElement<any>[],
) =>
  ts.createArrayTypeNode(
    /* elementType */ transform(element.type, path) as ts.TypeNode,
  );
