import * as ts from 'typescript';
import {
  create_export_namespace,
  IExportNamespace,
} from '../import-exports/export-namespace';

export const parse_namespace_export_declaration = (
  node: ts.NamespaceExportDeclaration,
): IExportNamespace =>
  create_export_namespace({
    name: node.name.text,
  });
