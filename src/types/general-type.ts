import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IGeneralTypeOptions {
  name: string | {name: string};
  generics?: IType[];
}

export interface IGeneralType
  extends IElement<ElementKind.GeneralType>, IGeneralTypeOptions {}

export const create_general_type = (options: IGeneralTypeOptions): IGeneralType => ({
  ...create_element(ElementKind.GeneralType),
  ...options,
});

// tslint:disable:ter-indent

export const transform_general_type = (element: IGeneralType, path: IElement<any>[]) =>
  ts.createTypeReferenceNode(
    /* typeName      */ (typeof element.name === 'string')
                          ? element.name
                          : element.name.name,
    /* typeArguments */ element.generics && element.generics.map(
                          generic => transform(generic, [...path, element]) as ts.TypeNode,
                        ),
  );
