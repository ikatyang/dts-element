import * as ts from 'typescript';
import {IType} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IGenericDeclarationOptions {
  name: string;
  extends?: IType;
  defalut?: IType;
}

export interface IGenericDeclaration
  extends IElement<ElementKind.GenericDeclaration>, IGenericDeclarationOptions {}

export const create_generic_declaration = (options: IGenericDeclarationOptions): IGenericDeclaration => ({
  ...create_element(ElementKind.GenericDeclaration),
  ...options,
});

export const transform_generic_declaration = (element: IGenericDeclaration, path: IElement<any>[]) =>
  ts.createTypeParameterDeclaration(
    /* name        */ element.name,
    /* constraint  */ element.extends && (transform(element.extends, path) as ts.TypeNode),
    /* defaultType */ element.defalut && (transform(element.defalut, path) as ts.TypeNode),
  );
