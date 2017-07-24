import * as ts from 'typescript';
import { IType } from '../collections';
import { ElementKind } from '../constants';
import { create_element, IElement, IElementOptions } from '../element';
import { transform } from '../transform';

export interface IIntersectionTypeOptions extends IElementOptions {
  types: IType[];
}

export interface IIntersectionType
  extends IElement<ElementKind.IntersectionType>,
    IIntersectionTypeOptions {}

export const create_intersection_type = (
  options: IIntersectionTypeOptions,
): IIntersectionType => ({
  ...create_element(ElementKind.IntersectionType),
  ...options,
});

/**
 * @hidden
 */
export const transform_intersection_type = (
  element: IIntersectionType,
  path: IElement<any>[],
) =>
  ts.createIntersectionTypeNode(
    /* types */ element.types.map(type => transform(type, path) as ts.TypeNode),
  );
