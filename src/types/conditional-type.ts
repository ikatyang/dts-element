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

export interface IConditionalTypeOptions extends IElementOptions {
  check: IType;
  extends: IType;
  true: IType;
  false: IType;
}

export interface IConditionalType
  extends IElement<ElementKind.ConditionalType>,
    IConditionalTypeOptions {}

export const create_conditional_type = (
  options: IConditionalTypeOptions,
): IConditionalType => ({
  ...create_element(ElementKind.ConditionalType),
  ...options,
});

export const is_conditional_type = (value: any): value is IConditionalType =>
  is_element(value) && value.kind === ElementKind.ConditionalType;

/**
 * @hidden
 */
export const transform_conditional_type = (
  element: IConditionalType,
  path: IElement<any>[],
) =>
  ts.createConditionalTypeNode(
    /* checkType   */ transform(element.check, path) as ts.TypeNode,
    /* extendsType */ transform(element.extends, path) as ts.TypeNode,
    /* trueType    */ transform(element.true, path) as ts.TypeNode,
    /* falseType   */ transform(element.false, path) as ts.TypeNode,
  );
