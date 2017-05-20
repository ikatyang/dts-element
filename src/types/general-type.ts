import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';

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

export const transform_general_type = (element: IGeneralType, path: IElement<any>[]) => {
  const reduced_parent = (element.parents === undefined || element.parents.length === 0)
    ? undefined
    : (element.parents
        .map(
          parent =>
            ts.createIdentifier(parent),
        ) as (ts.Identifier | ts.QualifiedName)[]
      )
      .reduce(
        (parent: ts.Identifier | ts.QualifiedName, current: ts.Identifier) =>
          ts.createQualifiedName(parent, current),
      );
  return ts.createTypeReferenceNode(
    /* typeName      */ (reduced_parent === undefined)
                          ? element.name
                          : ts.createQualifiedName(reduced_parent, element.name),
    /* typeArguments */ element.generics && element.generics.map(
                          generic => transform(generic, path) as ts.TypeNode,
                        ),
  );
};
