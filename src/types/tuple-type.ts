import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface ITupleTypeOptions {
  types: IType[];
}

export interface ITupleType
  extends IElement<ElementKind.TupleType>, ITupleTypeOptions {}

export const create_tuple_type = (options: ITupleTypeOptions): ITupleType => ({
  ...create_element(ElementKind.TupleType),
  ...options,
});

export const transform_tuple_type = (element: ITupleType, path: IElement<any>[]) =>
  ts.createTupleTypeNode(
    /* elementTypes */ element.types.map(type => transform(type, [...path, element]) as ts.TypeNode),
  );
