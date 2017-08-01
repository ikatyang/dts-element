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

export interface IModuleDeclarationOptions extends IElementOptions {
  name: string;
  members?: IModuleMember[];
}

export interface IModuleDeclaration
  extends IElement<ElementKind.ModuleDeclaration>,
    IModuleDeclarationOptions {}

export const create_module_declaration = (
  options: IModuleDeclarationOptions,
): IModuleDeclaration => ({
  ...create_element(ElementKind.ModuleDeclaration),
  ...options,
});

export const is_module_declaration = (
  value: any,
): value is IModuleDeclaration =>
  is_element(value) && value.kind === ElementKind.ModuleDeclaration;

/**
 * @hidden
 */
export const transform_module_declaration = (
  element: IModuleDeclaration,
  path: IElement<any>[],
) =>
  ts.createModuleDeclaration(
    /* decorators  */ undefined,
    /* modifiers   */ add_declare_modifier_if_need(undefined, path),
    /* name        */ ts.createLiteral(element.name),
    /* body        */ ts.createModuleBlock(
      (element.members || [])
        .map(member => transform(member, path) as ts.Statement),
    ),
    /* flags       */ undefined,
  );
