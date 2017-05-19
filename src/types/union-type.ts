import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';

export interface IUnionTypeOptions extends IElementOptions {
  types: IType[];
}

export interface IUnionType
  extends IElement<ElementKind.UnionType>, IUnionTypeOptions {}

export const create_union_type = (options: IUnionTypeOptions): IUnionType => ({
  ...create_element(ElementKind.UnionType),
  ...options,
});

export const transform_union_type = (element: IUnionType, path: IElement<any>[]) =>
  ts.createUnionTypeNode(
    /* types */ element.types.map(type => transform(type, path) as ts.TypeNode),
  );
