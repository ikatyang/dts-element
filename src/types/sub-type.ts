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

export interface ISubTypeOptions extends IElementOptions {
  types: IType[];
}

export interface ISubType
  extends IElement<ElementKind.SubType>,
    ISubTypeOptions {}

export const create_sub_type = (options: ISubTypeOptions): ISubType => ({
  ...create_element(ElementKind.SubType),
  ...options,
});

export const is_sub_type = (value: any): value is ISubTypeOptions =>
  is_element(value) && value.kind === ElementKind.SubType;

/**
 * @hidden
 */
export const transform_sub_type = (
  element: ISubType,
  path: IElement<any>[],
) => {
  const minimum_length_of_types = 2;
  if (element.types.length < minimum_length_of_types) {
    throw new Error(
      `sub_type.types.length should >= ${minimum_length_of_types}`,
    );
  }
  const types = element.types.map(type => transform(type, path) as ts.TypeNode);
  return types
    .slice(minimum_length_of_types)
    .reduce(
      (parent_type, sub_type) =>
        ts.createIndexedAccessTypeNode(parent_type, sub_type),
      ts.createIndexedAccessTypeNode(types[0], types[1]),
    );
};
