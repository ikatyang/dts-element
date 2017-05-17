import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IKeyofTypeOptions {
  type: IType;
}

export interface IKeyofType
  extends IElement<ElementKind.KeyofType>, IKeyofTypeOptions {}

export const create_keyof_type = (options: IKeyofTypeOptions): IKeyofType => ({
  ...create_element(ElementKind.KeyofType),
  ...options,
});

export const transform_keyof_type = (element: IKeyofType, path: IElement<any>[]) =>
  ts.createTypeOperatorNode(
    /* type */ transform(element.type, [...path, element]) as ts.TypeNode,
  );
