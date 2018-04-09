import * as ts from 'typescript';
import { IType } from '../collections';
import { ElementKind } from '../constants';
import {
  transform_generic_declaration,
  IGenericDeclaration,
} from '../declarations/generic-declaration';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { transform } from '../transform';

export interface IInferTypeOptions extends IElementOptions {
  generic: IGenericDeclaration;
}

export interface IInferType
  extends IElement<ElementKind.InferType>,
    IInferTypeOptions {}

export const create_infer_type = (options: IInferTypeOptions): IInferType => ({
  ...create_element(ElementKind.InferType),
  ...options,
});

export const is_infer_type = (value: any): value is IInferType =>
  is_element(value) && value.kind === ElementKind.InferType;

/**
 * @hidden
 */
export const transform_infer_type = (
  element: IInferType,
  path: IElement<any>[],
) =>
  ts.createInferTypeNode(
    /* typeParameter */ transform_generic_declaration(element.generic, path),
  );
