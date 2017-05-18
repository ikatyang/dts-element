import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {IClassMember} from '../members';
import {IIndexSignature} from '../others/index-signature';
import {transform} from '../transform';
import {IClassType} from '../types/class-type';
import {transform_generic_declaration, IGenericDeclaration} from './generic-declaration';

export interface IClassDeclarationOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  members?: (IClassMember | IIndexSignature)[];
  abstract?: boolean;
  extends?: IClassType;
}

export interface IClassDeclaration
  extends IElement<ElementKind.ClassDeclaration>, IClassDeclarationOptions {}

export const create_class_declaration = (options: IClassDeclarationOptions): IClassDeclaration => ({
  ...create_element(ElementKind.ClassDeclaration),
  ...options,
});

// tslint:disable:ter-indent max-line-length

export const transform_class_declaration = (element: IClassDeclaration, path: IElement<any>[]) =>
  ts.createClassDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ [
                            ...(element.export === true)
                              ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
                              : [],
                            ...(element.abstract === true)
                              ? [ts.createToken(ts.SyntaxKind.AbstractKeyword)]
                              : [],
                          ],
    /* name            */ element.name,
    /* typeParameters  */ element.generics && element.generics.map(
                            generic => transform_generic_declaration(generic, [...path, element]),
                          ),
    /* heritageClauses */ (element.extends === undefined)
                            ? []
                            : [ts.createHeritageClause(
                            /* token */ ts.SyntaxKind.ExtendsKeyword,
                            /* types */ [ts.createExpressionWithTypeArguments(
                                          /* typeArguments */ (element.extends.generics || []).map(
                                                                generic => transform(generic, [...path, element]) as ts.TypeNode,
                                                              ),
                                          /* expression    */ ts.createIdentifier(
                                                                (typeof element.extends.name === 'string')
                                                                  ? element.extends.name
                                                                  : element.extends.name.name),
                                        )],
                            )],
    /* members         */ (element.members || []).map(member => transform(member, [...path, element]) as ts.ClassElement),
  );
