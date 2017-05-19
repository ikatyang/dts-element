import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {IClassDeclaration} from '../declarations/class-declaration';
import {INamespaceDeclaration} from '../declarations/namespace-declaration';
import {create_element, IElement, IElementOptions} from '../element';
import {transform_general_type} from './general-type';

export interface IClassTypeOptions extends IElementOptions {
  parents?: (string | INamespaceDeclaration)[];
  name: string | IClassDeclaration;
  generics?: IType[];
}

export interface IClassType
  extends IElement<ElementKind.ClassType>, IClassTypeOptions {}

export const create_class_type = (options: IClassTypeOptions): IClassType => ({
  ...create_element(ElementKind.ClassType),
  ...options,
});

export const transform_class_type: (element: IClassType, path: IElement<any>[]) => ts.TypeReferenceNode
  = transform_general_type as any;
