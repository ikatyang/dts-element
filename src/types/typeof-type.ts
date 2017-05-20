import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';

export interface ITypeofTypeOptions extends IElementOptions {
  value: string;
}

export interface ITypeofType
  extends IElement<ElementKind.TypeofType>, ITypeofTypeOptions {}

export const create_typeof_type = (options: ITypeofTypeOptions): ITypeofType => ({
  ...create_element(ElementKind.TypeofType),
  ...options,
});

export const transform_typeof_type = (element: ITypeofType, path: IElement<any>[]) =>
  ts.createTypeQueryNode(
    /* exprName  */ ts.createIdentifier(element.value),
  );
