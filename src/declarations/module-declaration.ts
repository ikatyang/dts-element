import * as ts from 'typescript';
import {IRootElement} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface IModuleDeclarationOptions {
  name: string;
  children?: IRootElement[];
}

export interface IModuleDeclaration
  extends IElement<ElementKind.ModuleDeclaration>, IModuleDeclarationOptions {}

export const create_module_declaration = (options: IModuleDeclarationOptions): IModuleDeclaration => ({
  ...create_element(ElementKind.ModuleDeclaration),
  ...options,
});

export const transform_module_declaration = (element: IModuleDeclaration, path: IElement<any>[]) =>
  ts.createModuleDeclaration(
    /* decorators  */ undefined,
    /* modifiers   */ undefined,
    /* name        */ ts.createLiteral(element.name),
    /* body        */ ts.createModuleBlock((element.children || []).map(root_element =>
                        transform(root_element, [...path, element]) as ts.Statement,
                      )),
    /* flags       */ undefined,
  );
