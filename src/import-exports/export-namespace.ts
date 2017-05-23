import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';

export interface IExportNamespaceOptions extends IElementOptions {
  name: string;
}

export interface IExportNamespace
  extends IElement<ElementKind.ExportNamespace>, IExportNamespaceOptions {}

export const create_export_namespace = (options: IExportNamespaceOptions): IExportNamespace => ({
  ...create_element(ElementKind.ExportNamespace),
  ...options,
});

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_export_namespace = (element: IExportNamespace, path: IElement<any>[]) =>
  ts.createNamespaceExportDeclaration(
    /* name */ ts.createIdentifier(element.name),
  );
