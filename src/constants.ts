import * as ts from 'typescript';
import {create_native_type, INativeType} from './types/native-type';

export enum ElementKind {
  GenericDeclaration,
  GenericType,
  NativeType,
  ArrayType,
  ParameterDeclaration,
  FunctionType,
  FunctionDeclaration,
  IntersectionType,
  UnionType,
  LiteralType,
  KeyofType,
  TypeofType,
  TupleType,
  VariableDeclaration,
  ObjectMember,
  ConstructorType,
  IndexSignature,
  ObjectType,
  BasicType,
  TypeDeclaration,
  TypedType,
  InterfaceDeclaration,
}

export const any_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)});
export const never_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)});

export const null_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.NullKeyword)});
export const undefined_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword)});
export const void_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)});

export const boolean_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)});
export const number_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)});
export const string_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)});
export const symbol_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.SymbolKeyword)});
export const object_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)});

export const this_type = create_native_type({type: ts.createKeywordTypeNode(ts.SyntaxKind.ThisKeyword)});
