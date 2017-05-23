import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';

export interface IImportNamespaceOptions extends IElementOptions {
  from: string;
  name: string;
  default?: string;
}

export interface IImportNamespace
  extends IElement<ElementKind.ImportNamespace>, IImportNamespaceOptions {}

export const create_import_namespace = (options: IImportNamespaceOptions): IImportNamespace => ({
  ...create_element(ElementKind.ImportNamespace),
  ...options,
});

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_import_namespace = (element: IImportNamespace, path: IElement<any>[]) =>
  ts.createImportDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* importClause    */ ts.createImportClause(
                            /* name          */ (element.default === undefined)
                                                  ? undefined as any
                                                  : ts.createIdentifier(element.default),
                            /* namedBindings */ ts.createNamespaceImport(
                                                  ts.createIdentifier(element.name),
                                                ),
                          ),
    /* moduleSpecifier */ ts.createLiteral(element.from),
  );
