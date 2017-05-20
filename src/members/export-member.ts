import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {create_identifier_if_defined} from '../utils';

export interface IExportMemberOptions extends IElementOptions {
  name: string;
  property?: string;
}

export interface IExportMember
  extends IElement<ElementKind.ExportMember>, IExportMemberOptions {}

export const create_export_member = (options: IExportMemberOptions): IExportMember => ({
  ...create_element(ElementKind.ExportMember),
  ...options,
});

export const transform_export_member = (element: IExportMember, path: IElement<any>[]) =>
  ts.createExportSpecifier(
    /* propertyName  */ create_identifier_if_defined(element.property),
    /* name          */ ts.createIdentifier(element.name),
  );
