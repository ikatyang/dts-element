import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {IInterfaceDeclaration} from '../declarations/interface-declaration';
import {INamespaceDeclaration} from '../declarations/namespace-declaration';
import {create_element, IElement, IElementOptions} from '../element';
import {transform_general_type} from './general-type';

export interface IInterfaceTypeOptions extends IElementOptions {
  parents?: (string | INamespaceDeclaration)[];
  name: string | IInterfaceDeclaration;
  generics?: IType[];
}

export interface IInterfaceType
  extends IElement<ElementKind.InterfaceType>, IInterfaceTypeOptions {}

export const create_interface_type = (options: IInterfaceTypeOptions): IInterfaceType => ({
  ...create_element(ElementKind.InterfaceType),
  ...options,
});

export const transform_interface_type: (element: IInterfaceType, path: IElement<any>[]) => ts.TypeReferenceNode
  = transform_general_type as any;
