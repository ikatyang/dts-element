import * as ts from 'typescript';
import { ElementKind } from '../constants';
import { create_element, IElement, IElementOptions } from '../element';

export interface INativeTypeOptions extends IElementOptions {
  type: ts.TypeNode;
}

export interface INativeType
  extends IElement<ElementKind.NativeType>,
    INativeTypeOptions {}

export const create_native_type = (
  options: INativeTypeOptions,
): INativeType => ({
  ...create_element(ElementKind.NativeType),
  ...options,
});

/**
 * @hidden
 */
export const transform_native_type = (
  element: INativeType,
  _path: IElement<any>[],
) => element.type;
