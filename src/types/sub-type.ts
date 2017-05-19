import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface ISubTypeOptions {
  types: IType[];
}

export interface ISubType
  extends IElement<ElementKind.SubType>, ISubTypeOptions {}

export const create_sub_type = (options: ISubTypeOptions): ISubType => ({
  ...create_element(ElementKind.SubType),
  ...options,
});

const minimum_length_of_types = 2;

export const transform_sub_type = (element: ISubType, path: IElement<any>[]) => {
  if (element.types.length < minimum_length_of_types) {
    throw new Error(`sub_type.types.length should >= ${minimum_length_of_types}`);
  }
  const types = element.types.map(type => transform(type, [...path, element]) as ts.TypeNode);
  return types.slice(minimum_length_of_types).reduce(
    (parent_type, sub_type) => ts.createIndexedAccessTypeNode(parent_type, sub_type),
    ts.createIndexedAccessTypeNode(types[0], types[1]),
  );
};