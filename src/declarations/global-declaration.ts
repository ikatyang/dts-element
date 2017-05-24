import * as ts from 'typescript';
import {IModuleMember} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {transform} from '../transform';
import {add_declare_modifier_if_need} from '../utils';

export interface IGlobalDeclarationOptions extends IElementOptions {
  members?: IModuleMember[];
}

export interface IGlobalDeclaration
  extends IElement<ElementKind.GlobalDeclaration>, IGlobalDeclarationOptions {}

export const create_global_declaration = (options: IGlobalDeclarationOptions = {}): IGlobalDeclaration => ({
  ...create_element(ElementKind.GlobalDeclaration),
  ...options,
});

/**
 * @hidden
 */
export const transform_global_declaration = (element: IGlobalDeclaration, path: IElement<any>[]) =>
  ts.createModuleDeclaration(
    /* decorators  */ undefined,
    /* modifiers   */ add_declare_modifier_if_need(undefined, path),
    /* name        */ ts.createIdentifier('global'),
    /* body        */ ts.createModuleBlock((element.members || []).map(member =>
                        transform(member, path) as ts.Statement,
                      )),
    /* flags       */ ts.NodeFlags.GlobalAugmentation,
  );
