import * as ts from 'typescript';
import {create_import_named, IImportNamed} from '../import-exports/import-named';
import {create_import_namespace, IImportNamespace} from '../import-exports/import-namespace';
import {IImportMember} from '../members/import-member';
import {parse_native} from '../parse';
import {if_defined} from '../utils';
import {parse_identifier} from './identifier';

export const parse_import_declaration = (node: ts.ImportDeclaration): IImportNamed | IImportNamespace => {
  const from = (node.moduleSpecifier as ts.StringLiteral).text;
  if (node.importClause === undefined) {
    return create_import_named({
      from,
    });
  }
  const default_name = if_defined(node.importClause.name, parse_identifier);
  if (node.importClause.namedBindings === undefined ||
      node.importClause.namedBindings.kind === ts.SyntaxKind.NamedImports) {
    return create_import_named({
      from,
      default: default_name,
      members: if_defined(node.importClause.namedBindings, named_imports =>
        named_imports.elements.map(parse_native) as IImportMember[]),
    });
  } else {
    return create_import_namespace({
      from,
      default: default_name,
      name: node.importClause.namedBindings.name.text,
    });
  }
};
