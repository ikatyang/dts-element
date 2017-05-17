import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {IObjectMember} from '../members/object-member';
import {IIndexSignature} from '../others/index-signature';
import {transform} from '../transform';

export interface IObjectTypeOptions {
  members?: (IObjectMember | IIndexSignature)[];
}

export interface IObjectType
  extends IElement<ElementKind.ObjectType>, IObjectTypeOptions {}

export const create_object_type = (options: IObjectTypeOptions = {}): IObjectType => ({
  ...create_element(ElementKind.ObjectType),
  ...options,
});

export const transform_object_type = (element: IObjectType, path: IElement<any>[]) =>
  ts.createTypeLiteralNode(
    /* members  */ (element.members || []).map(member => transform(member, [...path, element]) as ts.TypeElement),
  );