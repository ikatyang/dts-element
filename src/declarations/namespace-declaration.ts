import * as ts from 'typescript';
import { IModuleMember } from '../collections';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { transform } from '../transform';
import { add_declare_modifier_if_need } from '../utils';

export interface INamespaceDeclarationOptions extends IElementOptions {
  name: string;
  export?: boolean;
  members?: IModuleMember[];
}

export interface INamespaceDeclaration
  extends IElement<ElementKind.NamespaceDeclaration>,
    INamespaceDeclarationOptions {}

export const create_namespace_declaration = (
  options: INamespaceDeclarationOptions,
): INamespaceDeclaration => ({
  ...create_element(ElementKind.NamespaceDeclaration),
  ...options,
});

export const is_namespace_declaration = (
  value: any,
): value is INamespaceDeclaration =>
  is_element(value) && value.kind === ElementKind.NamespaceDeclaration;

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_namespace_declaration = (
  element: INamespaceDeclaration,
  path: IElement<any>[],
) =>
  ts.createModuleDeclaration(
    /* decorators  */ undefined,
    /* modifiers   */ add_declare_modifier_if_need(
      element.export === true
        ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
        : undefined,
      path,
    ),
    /* name        */ ts.createIdentifier(element.name),
    /* body        */ ts.createModuleBlock(
      (element.members || []).map(
        member => transform(member, path) as ts.Statement,
      ),
    ),
    /* flags       */ ts.NodeFlags.Namespace,
  );
