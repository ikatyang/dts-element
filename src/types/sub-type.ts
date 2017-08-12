import * as ts from 'typescript';
import { IType } from '../collections';
import { any_type, ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { transform } from '../transform';

export interface ISubTypeOptions extends IElementOptions {
  object: IType;
  index?: IType;
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
export const transform_sub_type = (element: ISubType, path: IElement<any>[]) =>
  ts.createIndexedAccessTypeNode(
    transform(element.object, path) as ts.TypeNode,
    transform(element.index || any_type, path) as ts.TypeNode,
  );
