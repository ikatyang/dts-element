import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {IEnumDeclaration} from '../declarations/enum-declaration';
import {INamespaceDeclaration} from '../declarations/namespace-declaration';
import {IVariableDeclaration} from '../declarations/variable-declaration';
import {create_element, IElement, IElementOptions} from '../element';
import {transform_general_type} from './general-type';

export interface IEnumTypeOptions extends IElementOptions {
  parents?: (string | IEnumDeclaration | INamespaceDeclaration)[];
  name: string | IEnumDeclaration | IVariableDeclaration;
}

export interface IEnumType
  extends IElement<ElementKind.EnumType>, IEnumTypeOptions {}

export const create_enum_type = (options: IEnumTypeOptions): IEnumType => ({
  ...create_element(ElementKind.EnumType),
  ...options,
});

export const transform_enum_type: (element: IEnumType, path: IElement<any>[]) => ts.TypeReferenceNode
  = transform_general_type as any;
