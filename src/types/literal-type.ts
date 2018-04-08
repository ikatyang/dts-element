import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';

export interface ILiteralTypeOptions extends IElementOptions {
  value: boolean | number | string;
}

export interface ILiteralType
  extends IElement<ElementKind.LiteralType>,
    ILiteralTypeOptions {}

export const create_literal_type = (
  options: ILiteralTypeOptions,
): ILiteralType => ({
  ...create_element(ElementKind.LiteralType),
  ...options,
});

export const is_literal_type = (value: any): value is ILiteralType =>
  is_element(value) && value.kind === ElementKind.LiteralType;

/**
 * @hidden
 */
export const transform_literal_type = (
  element: ILiteralType,
  _path: IElement<any>[],
) =>
  ts.createLiteralTypeNode(
    /* literal */ {
      ...ts.createLiteral(element.value),
      _literalExpressionBrand: true,
      text: element.value.toString(),
    },
  );
