import * as ts from 'typescript';
import {
  create_class_declaration,
  IClassDeclaration,
} from '../declarations/class-declaration';
import { IGenericDeclaration } from '../declarations/generic-declaration';
import { IClassMember } from '../members/class-member';
import { parse_native } from '../parse';
import { IGeneralType } from '../types/general-type';
import { has_kind, if_defined } from '../utils';
import { parse_identifier } from './identifier';

export const parse_class_declaration = (
  node: ts.ClassDeclaration,
): IClassDeclaration =>
  create_class_declaration({
    name: parse_identifier(node.name as ts.Identifier),
    export: has_kind(node.modifiers, ts.SyntaxKind.ExportKeyword),
    abstract: has_kind(node.modifiers, ts.SyntaxKind.AbstractKeyword),
    generics: if_defined(
      node.typeParameters,
      generics => generics.map(parse_native) as IGenericDeclaration[],
    ),
    extends: if_defined(
      node.heritageClauses,
      heritage_clauses =>
        parse_native(heritage_clauses[0].types[0]) as IGeneralType,
    ),
    members: node.members.map(parse_native) as IClassMember[],
  });
