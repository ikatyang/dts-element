import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {IImportMember} from '../members/import-member';
import {transform} from '../transform';

export interface IImportNamedOptions extends IElementOptions {
  from: string;
  default?: string;
  members?: IImportMember[];
}

export interface IImportNamed
  extends IElement<ElementKind.ImportNamed>, IImportNamedOptions {}

export const create_import_named = (options: IImportNamedOptions): IImportNamed => ({
  ...create_element(ElementKind.ImportNamed),
  ...options,
});

// tslint:disable:ter-indent

export const transform_import_named = (element: IImportNamed, path: IElement<any>[]) =>
  ts.createImportDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* importClause    */ (element.members === undefined && element.default === undefined)
                            ? undefined
                            : ts.createImportClause(
                              /* name          */ (element.default === undefined)
                                                    ? undefined as any
                                                    : ts.createIdentifier(element.default),
                              /* namedBindings */ (element.members === undefined)
                                                    ? undefined as any
                                                    : ts.createNamedImports(
                                                      element.members.map(
                                                        member => transform(member, path) as ts.ImportSpecifier,
                                                      ),
                                                    ),
                            ),
    /* moduleSpecifier */ ts.createLiteral(element.from),
  );
