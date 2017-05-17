import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IBasicTypeOptions {
  name: string;
  generics?: IType[];
}

export interface IBasicType
  extends IElement<ElementKind.BasicType>, IBasicTypeOptions {}

export const create_basic_type = (options: IBasicTypeOptions): IBasicType => ({
  ...create_element(ElementKind.BasicType),
  ...options,
});

// tslint:disable:ter-indent

export const transform_basic_type = (element: IBasicType, path: IElement<any>[]) =>
  ts.createTypeReferenceNode(
    /* typeName      */ element.name,
    /* typeArguments */ element.generics && element.generics.map(
                          generic => transform(generic, [...path, element]) as ts.TypeNode,
                        ),
  );
