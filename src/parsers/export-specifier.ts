import * as ts from 'typescript';
import { create_export_member, IExportMember } from '../members/export-member';
import { if_defined } from '../utils';
import { parse_identifier } from './identifier';

export const parse_export_specifier = (
  node: ts.ExportSpecifier,
): IExportMember =>
  create_export_member({
    name: node.name.text,
    property: if_defined(node.propertyName, parse_identifier),
  });
