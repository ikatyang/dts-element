import * as ts from 'typescript';
import {
  create_import_equal,
  IImportEqual,
} from '../import-exports/import-equal';

import { parse_identifier } from './identifier';

export const parse_import_equals_declaration = (
  node: ts.ImportEqualsDeclaration,
): IImportEqual =>
  create_import_equal({
    name: parse_identifier(node.name as ts.Identifier),
    from: ((node.moduleReference as ts.ExternalModuleReference)
      .expression as ts.StringLiteral).text,
  });
