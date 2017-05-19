import * as ts from 'typescript';
import {IModuleMember} from '../collections';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {transform} from '../transform';

export interface INamespaceDeclarationOptions {
  name: string;
  export?: boolean;
  members?: IModuleMember[];
}

export interface INamespaceDeclaration
  extends IElement<ElementKind.NamespaceDeclaration>, INamespaceDeclarationOptions {}

export const create_namespace_declaration = (options: INamespaceDeclarationOptions): INamespaceDeclaration => ({
  ...create_element(ElementKind.NamespaceDeclaration),
  ...options,
});

export const transform_namespace_declaration = (element: INamespaceDeclaration, path: IElement<any>[]) =>
  ts.createModuleDeclaration(
    /* decorators  */ undefined,
    /* modifiers   */ (element.export === true)
                        ? [ts.createToken(ts.SyntaxKind.ExportKeyword)]
                        : undefined,
    /* name        */ ts.createIdentifier(element.name),
    /* body        */ ts.createModuleBlock((element.members || []).map(root_element =>
                        transform(root_element, path) as ts.Statement,
                      )),
    /* flags       */ ts.NodeFlags.Namespace,
  );
