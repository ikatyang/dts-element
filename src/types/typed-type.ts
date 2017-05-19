import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {INamespaceDeclaration} from '../declarations/namespace-declaration';
import {ITypeDeclaration} from '../declarations/type-declaration';
import {create_element, IElement, IElementOptions} from '../element';
import {transform_general_type} from './general-type';

export interface ITypedTypeOptions extends IElementOptions {
  parents?: (string | INamespaceDeclaration)[];
  name: string | ITypeDeclaration;
  generics?: IType[];
}

export interface ITypedType
  extends IElement<ElementKind.TypedType>, ITypedTypeOptions {}

export const create_typed_type = (options: ITypedTypeOptions): ITypedType => ({
  ...create_element(ElementKind.TypedType),
  ...options,
});

export const transform_typed_type: (element: ITypedType, path: IElement<any>[]) => ts.TypeReferenceNode
  = transform_general_type as any;
