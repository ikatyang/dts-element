import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';
import {create_qualified_name} from '../utils';

export interface IGeneralTypeOptions extends IElementOptions {
  parents?: string[];
  name: string;
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
    /* typeName      */ (element.parents === undefined || element.parents.length === 0)
                          ? element.name
                          : create_qualified_name([...element.parents, element.name]),
    /* typeArguments */ element.generics && element.generics.map(
                          generic => transform(generic, path) as ts.TypeNode,
                        ),
  );
