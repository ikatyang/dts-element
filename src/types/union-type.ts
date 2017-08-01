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

export interface IUnionTypeOptions extends IElementOptions {
  types: IType[];
}

export interface IUnionType
  extends IElement<ElementKind.UnionType>,
    IUnionTypeOptions {}

export const create_union_type = (options: IUnionTypeOptions): IUnionType => ({
  ...create_element(ElementKind.UnionType),
  ...options,
});

export const is_union_type = (value: any): value is IUnionType =>
  is_element(value) && value.kind === ElementKind.UnionType;

/**
 * @hidden
 */
export const transform_union_type = (
  element: IUnionType,
  path: IElement<any>[],
) =>
  ts.createUnionTypeNode(
    /* types */ element.types.map(type => transform(type, path) as ts.TypeNode),
  );
