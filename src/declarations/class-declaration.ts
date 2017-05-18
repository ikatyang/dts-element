import * as ts from 'typescript';
import {IIndexSignature} from '../../tests';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {IClassMember} from '../members';
import {transform} from '../transform';
import {transform_generic_declaration, IGenericDeclaration} from './generic-declaration';

export interface IClassDeclarationOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  members?: (IClassMember | IIndexSignature)[];
  abstract?: boolean;
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
    /* heritageClauses */ [],
    /* members         */ (element.members || []).map(member => transform(member, [...path, element]) as ts.ClassElement),
  );
