import * as ts from 'typescript';
import {create_export_named, IExportNamed} from '../import-exports/export-named';
import {IExportNamespace} from '../import-exports/export-namespace';
import {if_defined} from '../utils';
import {parse_export_specifier} from './export-specifier';

export const parse_export_declaration = (node: ts.ExportDeclaration): IExportNamed | IExportNamespace =>
  create_export_named({
    from: if_defined(node.moduleSpecifier, specifier => (specifier as ts.StringLiteral).text),
    members: if_defined(node.exportClause, export_clause => export_clause.elements.map(parse_export_specifier)),
  });
