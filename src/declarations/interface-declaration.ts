import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';
import {IGeneralType} from '../types/general-type';
import {create_object_type, IObjectType} from '../types/object-type';
import {create_expression_for_general_type, create_type_parameters} from '../utils';
import {IGenericDeclaration} from './generic-declaration';

export interface IInterfaceDeclarationOptions extends IElementOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  type?: IObjectType;
  extends?: IGeneralType[];
}

export interface IInterfaceDeclaration
  extends IElement<ElementKind.InterfaceDeclaration>, IInterfaceDeclarationOptions {}

export const create_interface_declaration = (options: IInterfaceDeclarationOptions): IInterfaceDeclaration => ({
  ...create_element(ElementKind.InterfaceDeclaration),
  ...options,
});

// tslint:disable:ter-indent max-line-length

export const transform_interface_declaration = (element: IInterfaceDeclaration, path: IElement<any>[]) =>
  ts.createInterfaceDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ (element.export === true)
                            ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
                            : undefined,
    /* name            */ element.name,
    /* typeParameters  */ create_type_parameters(element.generics, path),
    /* heritageClauses */ element.extends && [ts.createHeritageClause(
                            /* token */ ts.SyntaxKind.ExtendsKeyword,
                            /* types */ element.extends.map(extend => create_expression_for_general_type(extend, path)),
                          )],
    /* members         */ (transform(element.type || create_object_type(), path) as ts.TypeLiteralNode).members,
  );
