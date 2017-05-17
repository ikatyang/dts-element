import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type, ElementKind} from '../constants';
import {transform_generic_declaration, IGenericDeclaration} from '../declarations/generic-declaration';
import {transform_parameter_declaration, IParameterDeclaration} from '../declarations/parameter-declaration';
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
                            generic => transform_generic_declaration(generic, [...path, element]),
                          ),
    /* parameters      */ (element.parameters || []).map(
                            parameter => transform_parameter_declaration(parameter, [...path, element]),
                          ),
    /* type            */ transform(element.return || any_type, [...path, element]) as ts.TypeNode,
  );
