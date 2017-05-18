import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {create_element, IElement} from '../element';
import {transform_general_type} from './general-type';

export interface IGenericTypeOptions {
  name: string | IGenericDeclaration;
}

export interface IGenericType
  extends IElement<ElementKind.GenericType>, IGenericTypeOptions {}

export const create_generic_type = (options: IGenericTypeOptions): IGenericType => ({
  ...create_element(ElementKind.GenericType),
  ...options,
});

export const transform_generic_type: (element: IGenericType, path: IElement<any>[]) => ts.TypeReferenceNode
  = transform_general_type as any;
