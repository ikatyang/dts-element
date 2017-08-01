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

export interface IKeyofTypeOptions extends IElementOptions {
  type: IType;
}

export interface IKeyofType
  extends IElement<ElementKind.KeyofType>,
    IKeyofTypeOptions {}

export const create_keyof_type = (options: IKeyofTypeOptions): IKeyofType => ({
  ...create_element(ElementKind.KeyofType),
  ...options,
});

export const is_keyof_type = (value: any): value is IKeyofType =>
  is_element(value) && value.kind === ElementKind.KeyofType;

/**
 * @hidden
 */
export const transform_keyof_type = (
  element: IKeyofType,
  path: IElement<any>[],
) =>
  ts.createTypeOperatorNode(
    /* type */ transform(element.type, path) as ts.TypeNode,
  );
