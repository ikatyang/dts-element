import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';
import {IGeneralType} from '../types/general-type';
import {create_object_type, IObjectType} from '../types/object-type';
import {add_declare_modifier_if_need, create_type_arguments, create_type_parameters} from '../utils';
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
    /* modifiers       */ add_declare_modifier_if_need(
                            (element.export === true)
                              ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
                              : undefined,
                            path,
                          ),
    /* name            */ element.name,
    /* typeParameters  */ create_type_parameters(element.generics, path),
    /* heritageClauses */ element.extends && [ts.createHeritageClause(
                            /* token */ ts.SyntaxKind.ExtendsKeyword,
                            /* types */ element.extends.map(interface_type => ts.createExpressionWithTypeArguments(
                                          /* typeArguments */ create_type_arguments(interface_type.generics, path),
                                          /* expression    */ ts.createIdentifier(interface_type.name),
                                        )),
                          )],
    /* members         */ (transform(element.type || create_object_type(), path) as ts.TypeLiteralNode).members,
  );
