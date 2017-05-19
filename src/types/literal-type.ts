import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';

export interface ILiteralTypeOptions extends IElementOptions {
  value: boolean | number | string;
}

export interface ILiteralType
  extends IElement<ElementKind.LiteralType>, ILiteralTypeOptions {}

export const create_literal_type = (options: ILiteralTypeOptions): ILiteralType => ({
  ...create_element(ElementKind.LiteralType),
  ...options,
});

export const transform_literal_type = (element: ILiteralType, path: IElement<any>[]) =>
  ts.createLiteralTypeNode(
    /* literal */ ts.createLiteral(element.value),
  );
