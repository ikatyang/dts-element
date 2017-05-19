import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {IClassMember} from '../members';
import {IIndexSignature} from '../others/index-signature';
import {transform} from '../transform';
import {IClassType} from '../types/class-type';
import {IGeneralType} from '../types/general-type';
import {add_declare_modifier_if_need} from '../utils';
import {IGenericDeclaration} from './generic-declaration';

export interface IClassDeclarationOptions extends IElementOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  members?: (IClassMember | IIndexSignature)[];
  abstract?: boolean;
  extends?: IClassType | IGeneralType;
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
    /* modifiers       */ add_declare_modifier_if_need(
                            [
                              ...(element.export === true)
                                ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
                                : [],
                              ...(element.abstract === true)
                                ? [ts.createToken(ts.SyntaxKind.AbstractKeyword)]
                                : [],
                            ],
                            path,
                          ),
    /* name            */ element.name,
    /* typeParameters  */ element.generics && element.generics.map(
                            generic => transform(generic, path) as ts.TypeParameterDeclaration,
                          ),
    /* heritageClauses */ (element.extends === undefined)
                            ? []
                            : [ts.createHeritageClause(
                            /* token */ ts.SyntaxKind.ExtendsKeyword,
                            /* types */ [ts.createExpressionWithTypeArguments(
                                          /* typeArguments */ (element.extends.generics || []).map(
                                                                generic => transform(generic, path) as ts.TypeNode,
                                                              ),
                                          /* expression    */ ts.createIdentifier(
                                                                (typeof element.extends.name === 'string')
                                                                  ? element.extends.name
                                                                  : element.extends.name.name),
                                        )],
                            )],
    /* members         */ (element.members || []).map(member => transform(member, path) as ts.ClassElement),
  );
