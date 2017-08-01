import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { create_property_access } from '../utils';

export interface IExportEqualOptions extends IElementOptions {
  parents?: string[];
  value: string;
}

export interface IExportEqual
  extends IElement<ElementKind.ExportEqual>,
    IExportEqualOptions {}

export const create_export_equal = (
  options: IExportEqualOptions,
): IExportEqual => ({
  ...create_element(ElementKind.ExportEqual),
  ...options,
});

export const is_export_equal = (value: any): value is IExportEqual =>
  is_element(value) && value.kind === ElementKind.ExportEqual;

// tslint:disable:ter-indent

/**
 * @hidden
 */
export const transform_export_equal = (
  element: IExportEqual,
  _path: IElement<any>[],
) =>
  ts.createExportAssignment(
    /* decorators      */ undefined,
    /* modifiers       */ undefined,
    /* isExportEquals  */ true,
    /* expression      */ element.parents === undefined ||
    element.parents.length === 0
      ? ts.createIdentifier(element.value)
      : create_property_access([...element.parents, element.value]),
  );
