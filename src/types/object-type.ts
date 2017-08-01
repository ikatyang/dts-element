import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { IObjectMember } from '../members/object-member';
import { IIndexSignature } from '../others/index-signature';
import { transform } from '../transform';

export interface IObjectTypeOptions extends IElementOptions {
  members?: (IObjectMember | IIndexSignature)[];
}

export interface IObjectType
  extends IElement<ElementKind.ObjectType>,
    IObjectTypeOptions {}

export const create_object_type = (
  options: IObjectTypeOptions = {},
): IObjectType => ({
  ...create_element(ElementKind.ObjectType),
  ...options,
});

export const is_object_type = (value: any): value is IObjectType =>
  is_element(value) && value.kind === ElementKind.ObjectType;

/**
 * @hidden
 */
export const transform_object_type = (
  element: IObjectType,
  path: IElement<any>[],
) =>
  ts.createTypeLiteralNode(
    /* members  */ (element.members || [])
      .map(member => transform(member, path) as ts.TypeElement),
  );
