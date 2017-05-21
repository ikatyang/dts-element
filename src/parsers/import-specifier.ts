import * as ts from 'typescript';
import {create_import_member, IImportMember} from '../members/import-member';
import {if_defined} from '../utils';
import {parse_identifier} from './identifier';

export const parse_import_specifier = (node: ts.ImportSpecifier): IImportMember =>
  create_import_member({
    name: node.name.text,
    property: if_defined(node.propertyName, parse_identifier),
  });
