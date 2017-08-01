import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { IImportMember } from '../members/import-member';
import { transform } from '../transform';

export interface IImportNamedOptions extends IElementOptions {
  from: string;
  default?: string;
  members?: IImportMember[];
}

export interface IImportNamed
  extends IElement<ElementKind.ImportNamed>,
    IImportNamedOptions {}

export const create_import_named = (
  options: IImportNamedOptions,
): IImportNamed => ({
  ...create_element(ElementKind.ImportNamed),
  ...options,
});

export const is_import_named = (value: any): value is IImportNamed =>
  is_element(value) && value.kind === ElementKind.ImportNamed;

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_import_named = (
  element: IImportNamed,
  path: IElement<any>[],
) =>
  ts.createImportDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* importClause    */ element.members === undefined &&
    element.default === undefined
      ? undefined
      : ts.createImportClause(
          /* name          */ element.default === undefined
            ? undefined
            : ts.createIdentifier(element.default),
          /* namedBindings */ element.members === undefined
            ? undefined
            : ts.createNamedImports(
                element.members.map(
                  member => transform(member, path) as ts.ImportSpecifier,
                ),
              ),
        ),
    /* moduleSpecifier */ ts.createLiteral(element.from),
  );
