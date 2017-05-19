import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {IGenericDeclaration} from '../declarations/generic-declaration';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IConstructorTypeOptions {
  return?: IType;
  generics?: IGenericDeclaration[];
  parameters?: IParameterDeclaration[];
}

export interface IConstructorType
  extends IElement<ElementKind.ConstructorType>, IConstructorTypeOptions {}

export const create_constructor_type = (options: IConstructorTypeOptions = {}): IConstructorType => ({
  ...create_element(ElementKind.ConstructorType),
  ...options,
});

// tslint:disable:ter-indent
export const transform_constructor_type = (element: IConstructorType, path: IElement<any>[]) =>
  ts.createConstructorTypeNode(
    /* typeParameters  */ element.generics && element.generics.map(
                            generic => transform(generic, path) as ts.TypeParameterDeclaration,
                          ),
    /* parameters      */ (element.parameters || []).map(
                            parameter => transform(parameter, path) as ts.ParameterDeclaration,
                          ),
    /* type            */ transform(element.return || any_type, path) as ts.TypeNode,
  );
