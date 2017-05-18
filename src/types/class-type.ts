import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {IClassDeclaration} from '../declarations/class-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IClassTypeOptions {
  name: string | IClassDeclaration;
  generics?: IType[];
}

export interface IClassType
  extends IElement<ElementKind.ClassType>, IClassTypeOptions {}

export const create_class_type = (options: IClassTypeOptions): IClassType => ({
  ...create_element(ElementKind.ClassType),
  ...options,
});

// tslint:disable:ter-indent

export const transform_class_type = (element: IClassType, path: IElement<any>[]) =>
  ts.createTypeReferenceNode(
    /* typeName      */ (typeof element.name === 'string')
                          ? element.name
                          : element.name.name,
    /* typeArguments */ element.generics && element.generics.map(
                          generic => transform(generic, [...path, element]) as ts.TypeNode,
                        ),
  );
