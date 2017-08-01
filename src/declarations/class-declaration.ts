import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { IClassMember } from '../members';
import { IIndexSignature } from '../others/index-signature';
import { transform } from '../transform';
import { IGeneralType } from '../types/general-type';
import {
  add_declare_modifier_if_need,
  create_expression_for_general_type,
  create_type_parameters,
} from '../utils';
import { IGenericDeclaration } from './generic-declaration';

export interface IClassDeclarationOptions extends IElementOptions {
  name: string;
  export?: boolean;
  generics?: IGenericDeclaration[];
  members?: (IClassMember | IIndexSignature)[];
  abstract?: boolean;
  extends?: IGeneralType;
}

export interface IClassDeclaration
  extends IElement<ElementKind.ClassDeclaration>,
    IClassDeclarationOptions {}

export const create_class_declaration = (
  options: IClassDeclarationOptions,
): IClassDeclaration => ({
  ...create_element(ElementKind.ClassDeclaration),
  ...options,
});

export const is_class_declaration = (value: any): value is IClassDeclaration =>
  is_element(value) && value.kind === ElementKind.ClassDeclaration;

// tslint:disable:ter-indent max-line-length

/**
 * @hidden
 */
export const transform_class_declaration = (
  element: IClassDeclaration,
  path: IElement<any>[],
) =>
  ts.createClassDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ add_declare_modifier_if_need(
      [
        ...(element.export === true
          ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
          : []),
        ...(element.abstract === true
          ? [ts.createToken(ts.SyntaxKind.AbstractKeyword)]
          : []),
      ],
      path,
    ),
    /* name            */ element.name,
    /* typeParameters  */ create_type_parameters(element.generics, path),
    /* heritageClauses */ element.extends === undefined
      ? []
      : [
          ts.createHeritageClause(
            /* token */ ts.SyntaxKind.ExtendsKeyword,
            /* types */ [
              create_expression_for_general_type(element.extends, path),
            ],
          ),
        ],
    /* members         */ (element.members || [])
      .map(member => transform(member, path) as ts.ClassElement),
  );
