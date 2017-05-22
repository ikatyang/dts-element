import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type} from '../constants';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';
import {create_type_parameters} from '../utils';
import {IGenericDeclaration} from './generic-declaration';

export interface ITypeDeclarationOptions extends IElementOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  type?: IType;
}

export interface ITypeDeclaration
  extends IElement<ElementKind.TypeDeclaration>, ITypeDeclarationOptions {}

export const create_type_declaration = (options: ITypeDeclarationOptions): ITypeDeclaration => ({
  ...create_element(ElementKind.TypeDeclaration),
  ...options,
});

// tslint:disable:ter-indent

export const transform_type_declaration = (element: ITypeDeclaration, path: IElement<any>[]) => {
  const type_declaration = ts.createTypeAliasDeclaration(
    /* name            */ element.name,
    /* typeParameters  */ create_type_parameters(element.generics, path),
    /* type            */ transform(element.type || any_type, path) as ts.TypeNode,
  );
  if (element.export === true) {
    type_declaration.modifiers = [ts.createToken(ts.SyntaxKind.ExportKeyword)] as ts.NodeArray<ts.Modifier>;
  }
  return type_declaration;
};
