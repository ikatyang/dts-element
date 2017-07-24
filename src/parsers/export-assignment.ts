import * as ts from 'typescript';
import {
  create_export_default,
  IExportDefault,
} from '../import-exports/export-default';
import {
  create_export_equal,
  IExportEqual,
} from '../import-exports/export-equal';
import { parse_identifier } from './identifier';
import { parse_property_access_expression } from './property-access-expression';

export const parse_export_assignment = (
  node: ts.ExportAssignment,
): IExportDefault | IExportEqual => {
  const names =
    node.expression.kind === ts.SyntaxKind.Identifier
      ? [parse_identifier(node.expression as ts.Identifier)]
      : parse_property_access_expression(
          node.expression as ts.PropertyAccessExpression,
        );
  const parents = names.length > 1 ? names.slice(0, -1) : undefined;
  const value = names[names.length - 1];
  return node.isExportEquals === true
    ? create_export_equal({
        parents,
        value,
      })
    : create_export_default({
        parents,
        value,
      });
};
