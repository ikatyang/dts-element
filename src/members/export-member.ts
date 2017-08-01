import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { if_defined } from '../utils';

export interface IExportMemberOptions extends IElementOptions {
  name: string;
  property?: string;
}

export interface IExportMember
  extends IElement<ElementKind.ExportMember>,
    IExportMemberOptions {}

export const create_export_member = (
  options: IExportMemberOptions,
): IExportMember => ({
  ...create_element(ElementKind.ExportMember),
  ...options,
});

export const is_export_member = (value: any): value is IExportMember =>
  is_element(value) && value.kind === ElementKind.ExportMember;

/**
 * @hidden
 */
export const transform_export_member = (
  element: IExportMember,
  _path: IElement<any>[],
) =>
  ts.createExportSpecifier(
    /* propertyName  */ if_defined(element.property, ts.createIdentifier),
    /* name          */ ts.createIdentifier(element.name),
  );
