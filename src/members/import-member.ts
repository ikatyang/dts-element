import * as ts from 'typescript';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { if_defined } from '../utils';

export interface IImportMemberOptions extends IElementOptions {
  name: string;
  property?: string;
}

export interface IImportMember
  extends IElement<ElementKind.ImportMember>,
    IImportMemberOptions {}

export const create_import_member = (
  options: IImportMemberOptions,
): IImportMember => ({
  ...create_element(ElementKind.ImportMember),
  ...options,
});

export const is_import_member = (value: any): value is IImportMember =>
  is_element(value) && value.kind === ElementKind.ImportMember;

/**
 * @hidden
 */
export const transform_import_member = (
  element: IImportMember,
  _path: IElement<any>[],
) =>
  ts.createImportSpecifier(
    /* propertyName  */ if_defined(element.property, ts.createIdentifier),
    /* name          */ ts.createIdentifier(element.name),
  );
