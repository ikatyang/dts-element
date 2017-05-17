import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';
import {IInterfaceType} from '../types/interface-type';
import {create_object_type, transform_object_type, IObjectType} from '../types/object-type';
import {transform_generic_declaration, IGenericDeclaration} from './generic-declaration';

export interface IInterfaceDeclarationOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  type?: IObjectType;
  extends?: IInterfaceType[];
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
    /* typeParameters  */ element.generics && element.generics.map(
                            generic => transform_generic_declaration(generic, [...path, element]),
                          ),
    /* heritageClauses */ element.extends && [ts.createHeritageClause(
                            /* token */ ts.SyntaxKind.ExtendsKeyword,
                            /* types */ element.extends.map(interface_type => ts.createExpressionWithTypeArguments(
                                          /* typeArguments */ (interface_type.generics || []).map(
                                                                generic => transform(generic, [...path, element]) as ts.TypeNode,
                                                              ),
                                          /* expression    */ ts.createIdentifier(
                                                                (typeof interface_type.name === 'string')
                                                                  ? interface_type.name
                                                                  : interface_type.name.name),
                                        )),
                          )],
    /* members         */ transform_object_type(element.type || create_object_type(), [...path, element]).members,
  );
