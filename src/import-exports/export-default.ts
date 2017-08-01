import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { create_property_access } from '../utils';

export interface IExportDefaultOptions extends IElementOptions {
  parents?: string[];
  value: string;
}

export interface IExportDefault
  extends IElement<ElementKind.ExportDefault>,
    IExportDefaultOptions {}

export const create_export_default = (
  options: IExportDefaultOptions,
): IExportDefault => ({
  ...create_element(ElementKind.ExportDefault),
  ...options,
});

export const is_export_default = (value: any): value is IExportDefault =>
  is_element(value) && value.kind === ElementKind.ExportDefault;

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_export_default = (
  element: IExportDefault,
  _path: IElement<any>[],
) =>
  ts.createExportAssignment(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* isExportEquals  */ false,
    /* expression      */ element.parents === undefined ||
    element.parents.length === 0
      ? ts.createIdentifier(element.value)
      : create_property_access([...element.parents, element.value]),
  );
