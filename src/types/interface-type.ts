import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {IInterfaceDeclaration} from '../declarations/interface-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';
import {transform_general_type} from './general-type';

export interface IInterfaceTypeOptions {
  name: string | IInterfaceDeclaration;
  generics?: IType[];
}

export interface IInterfaceType
  extends IElement<ElementKind.InterfaceType>, IInterfaceTypeOptions {}

export const create_interface_type = (options: IInterfaceTypeOptions): IInterfaceType => ({
  ...create_element(ElementKind.InterfaceType),
  ...options,
});

// tslint:disable:ter-indent

export const transform_interface_type = (element: IInterfaceType, path: IElement<any>[]) =>
  transform_general_type(element as any, path);
