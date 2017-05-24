import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {IExportMember} from '../members/export-member';
import {transform} from '../transform';

export interface IExportNamedOptions extends IElementOptions {
  from?: string;
  members?: IExportMember[];
}

export interface IExportNamed
  extends IElement<ElementKind.ExportNamed>, IExportNamedOptions {}

export const create_export_named = (options: IExportNamedOptions): IExportNamed => ({
  ...create_element(ElementKind.ExportNamed),
  ...options,
});

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_export_named = (element: IExportNamed, path: IElement<any>[]) => {
  if (element.from === undefined && element.members === undefined) {
    throw new Error(`export_named.from or export_named.members should either exist`);
  }
  return ts.createExportDeclaration(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* exportClause    */ (element.members === undefined)
                            ? undefined
                            : ts.createNamedExports(
                              element.members.map(member => transform(member, path) as ts.ExportSpecifier),
                            ),
    /* moduleSpecifier */ (element.from === undefined)
                            ? undefined
                            : ts.createLiteral(element.from),
  );
};
