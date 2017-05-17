import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IArrayTypeOptions {
  type: IType;
}

export interface IArrayType
  extends IElement<ElementKind.ArrayType>, IArrayTypeOptions {}

export const create_array_type = (options: IArrayTypeOptions): IArrayType => ({
  ...create_element(ElementKind.ArrayType),
  ...options,
});

export const transform_array_type = (element: IArrayType, path: IElement<any>[]) =>
  ts.createArrayTypeNode(
    /* elementType */ transform(element.type, [...path, element]) as ts.TypeNode,
  );
