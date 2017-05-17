import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {ITypeDeclaration} from '../declarations/type-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface ITypedTypeOptions {
  name: string | ITypeDeclaration;
  generics?: IType[];
}

export interface ITypedType
  extends IElement<ElementKind.TypedType>, ITypedTypeOptions {}

export const create_typed_type = (options: ITypedTypeOptions): ITypedType => ({
  ...create_element(ElementKind.TypedType),
  ...options,
});

// tslint:disable:ter-indent

export const transform_typed_type = (element: ITypedType, path: IElement<any>[]) =>
  ts.createTypeReferenceNode(
    /* typeName      */ (typeof element.name === 'string')
                          ? element.name
                          : element.name.name,
    /* typeArguments */ element.generics && element.generics.map(
                          generic => transform(generic, [...path, element]) as ts.TypeNode,
                        ),
  );
