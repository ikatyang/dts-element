import * as ts from 'typescript';
import {create_native_type, INativeType} from './types/native-type';

export enum ElementKind {
  ArrayType,
  ClassDeclaration,
  ClassMember,
  ConstructorType,
  EnumDeclaration,
  ExportDefault,
  ExportEqual,
  ExportMember,
  ExportNamed,
  ExportNamespace,
  FunctionDeclaration,
  FunctionType,
  GeneralType,
  GenericDeclaration,
  GlobalDeclaration,
  ImportMember,
  ImportNamed,
  ImportNamespace,
  IndexSignature,
  InterfaceDeclaration,
  IntersectionType,
  JSDocComment,
  KeyofType,
  LiteralType,
  MappedType,
  ModuleDeclaration,
  MultiLineComment,
  NamespaceDeclaration,
  NativeType,
  ObjectMember,
  ObjectType,
  ParameterDeclaration,
  SingleLineComment,
  SubType,
  TopLevelElement,
  TripleSlashReference,
  TupleType,
  TypeDeclaration,
  TypePredicate,
  TypeofType,
  UnionType,
  VariableDeclaration,
}

export const any_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)});
export const boolean_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)});
export const never_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)});
export const null_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.NullKeyword)});
export const number_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)});
export const object_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)});
export const string_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)});
export const symbol_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.SymbolKeyword)});
export const this_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.ThisKeyword)});
export const undefined_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword)});
export const void_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)});
