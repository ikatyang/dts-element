import * as ts from 'typescript';
import {IType} from '../collections';
import {any_type} from '../constants';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';
import {create_object_type, transform_object_type, IObjectType} from '../types/object-type';
import {transform_generic_declaration, IGenericDeclaration} from './generic-declaration';

export interface IInterfaceDeclarationOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  type?: IObjectType;
}

export interface IInterfaceDeclaration
  extends IElement<ElementKind.InterfaceDeclaration>, IInterfaceDeclarationOptions {}

export const create_interface_declaration = (options: IInterfaceDeclarationOptions): IInterfaceDeclaration => ({
  ...create_element(ElementKind.InterfaceDeclaration),
  ...options,
});

// tslint:disable:ter-indent

export const transform_interface_declaration = (element: IInterfaceDeclaration, path: IElement<any>[]) =>
  ts.createInterfaceDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ (element.export === true)
                            ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
                            : undefined,
    /* name            */ element.name,
    /* typeParameters  */ element.generics && element.generics.map(
                            generic => transform_generic_declaration(generic, [...path, element]),
                          ),
    /* heritageClauses */ undefined,
    /* members         */ transform_object_type(element.type || create_object_type(), [...path, element]).members,
  );
