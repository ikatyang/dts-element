import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';
import {create_identifier_if_defined} from '../utils';

export interface IImportMemberOptions extends IElementOptions {
  name: string;
  property?: string;
}

export interface IImportMember
  extends IElement<ElementKind.ImportMember>, IImportMemberOptions {}

export const create_import_member = (options: IImportMemberOptions): IImportMember => ({
  ...create_element(ElementKind.ImportMember),
  ...options,
});

export const transform_import_member = (element: IImportMember, path: IElement<any>[]) =>
  ts.createImportSpecifier(
    /* propertyName  */ create_identifier_if_defined(element.property),
    /* name          */ ts.createIdentifier(element.name),
  );
