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

export interface IGlobalDeclarationOptions extends IElementOptions {
  members?: IModuleMember[];
}

export interface IGlobalDeclaration
  extends IElement<ElementKind.GlobalDeclaration>,
    IGlobalDeclarationOptions {}

export const create_global_declaration = (
  options: IGlobalDeclarationOptions = {},
): IGlobalDeclaration => ({
  ...create_element(ElementKind.GlobalDeclaration),
  ...options,
});

export const is_global_declaration = (
  value: any,
): value is IGlobalDeclaration =>
  is_element(value) && value.kind === ElementKind.GlobalDeclaration;

/**
 * @hidden
 */
export const transform_global_declaration = (
  element: IGlobalDeclaration,
  path: IElement<any>[],
) =>
  ts.createModuleDeclaration(
    /* decorators  */ undefined,
    /* modifiers   */ add_declare_modifier_if_need(undefined, path),
    /* name        */ ts.createIdentifier('global'),
    /* body        */ ts.createModuleBlock(
      (element.members || [])
        .map(member => transform(member, path) as ts.Statement),
    ),
    /* flags       */ ts.NodeFlags.GlobalAugmentation,
  );
