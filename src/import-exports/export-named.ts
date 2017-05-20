import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {IExportMember} from '../members/export-member';
import {transform} from '../transform';

export interface IExportNamedOptions extends IElementOptions {
  from?: string;
  members: IExportMember[];
}

export interface IExportNamed
  extends IElement<ElementKind.ExportNamed>, IExportNamedOptions {}

export const create_export_named = (options: IExportNamedOptions): IExportNamed => ({
  ...create_element(ElementKind.ExportNamed),
  ...options,
});

// tslint:disable:ter-indent

export const transform_export_named = (element: IExportNamed, path: IElement<any>[]) =>
  ts.createExportDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* exportClause    */ ts.createNamedExports(
                            element.members.map(member => transform(member, path) as ts.ExportSpecifier),
                          ),
    /* moduleSpecifier */ (element.from === undefined)
                            ? undefined
                            : ts.createLiteral(element.from),
  );
