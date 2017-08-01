import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';

export interface IExportNamespaceOptions extends IElementOptions {
  name: string;
}

export interface IExportNamespace
  extends IElement<ElementKind.ExportNamespace>,
    IExportNamespaceOptions {}

export const create_export_namespace = (
  options: IExportNamespaceOptions,
): IExportNamespace => ({
  ...create_element(ElementKind.ExportNamespace),
  ...options,
});

export const is_export_namespace = (value: any): value is IExportNamespace =>
  is_element(value) && value.kind === ElementKind.ExportNamespace;

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_export_namespace = (
  element: IExportNamespace,
  _path: IElement<any>[],
) =>
  ts.createNamespaceExportDeclaration(
    /* name */ ts.createIdentifier(element.name),
  );
