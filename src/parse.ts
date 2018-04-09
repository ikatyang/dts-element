import * as ts from 'typescript';
import { IType } from './collections';
import {
  any_type,
  boolean_type,
  never_type,
  null_type,
  number_type,
  object_type,
  string_type,
  symbol_type,
  this_type,
  undefined_type,
  void_type,
} from './constants';
import { ITypeDeclaration } from './declarations/type-declaration';
import { IElement } from './element';
import { emit_native } from './emit';
import { ITopLevelElement } from './others/top-level-element';
import { parse_array_type } from './parsers/array-type';
import { parse_call_signature } from './parsers/call-signature';
import { parse_class_declaration } from './parsers/class-declaration';
import { parse_conditional_type } from './parsers/conditional-type';
import { parse_construct_signature } from './parsers/construct-signature';
import { parse_constructor } from './parsers/constructor';
import { parse_constructor_type } from './parsers/constructor-type';
import { parse_enum_declaration } from './parsers/enum-declaration';
import { parse_enum_member } from './parsers/enum-member';
import { parse_export_assignment } from './parsers/export-assignment';
import { parse_export_declaration } from './parsers/export-declaration';
import { parse_export_specifier } from './parsers/export-specifier';
import { parse_expression_with_type_arguments } from './parsers/expression-with-type-arguments';
import { parse_function_declaration } from './parsers/function-declaration';
import { parse_function_type } from './parsers/function-type';
import { parse_import_declaration } from './parsers/import-declaration';
import { parse_import_equals_declaration } from './parsers/import-equals-declaration';
import { parse_import_specifier } from './parsers/import-specifier';
import { parse_index_signature } from './parsers/index-signature';
import { parse_indexed_access_type } from './parsers/indexed-access-type';
import { parse_interface_declaration } from './parsers/interface-declaration';
import { parse_intersection_type } from './parsers/intersection-type';
import { parse_mapped_type } from './parsers/mapped-type';
import { parse_method_declaration } from './parsers/method-declaration';
import { parse_method_signature } from './parsers/method-signature';
import { parse_module_declaration } from './parsers/module-declaration';
import { parse_namespace_export_declaration } from './parsers/namespace-export-declaration';
import { parse_parameter_declaration } from './parsers/parameter-declaration';
import { parse_parenthesized_type } from './parsers/parenthesized-type';
import { parse_property_declaration } from './parsers/property-declaration';
import { parse_property_signature } from './parsers/property-signature';
import { parse_source_file } from './parsers/source-file';
import { parse_tuple_type } from './parsers/tuple-type';
import { parse_type_alias_declaration } from './parsers/type-alias-declaration';
import { parse_type_literal } from './parsers/type-literal';
import { parse_type_operator } from './parsers/type-operator';
import { parse_type_parameter } from './parsers/type-parameter';
import { parse_type_predicater } from './parsers/type-predicate';
import { parse_type_query } from './parsers/type-query';
import { parse_type_reference } from './parsers/type-reference';
import { parse_union_type } from './parsers/union-type';
import { parse_variable_statement } from './parsers/variable-statement';
import { create_literal_type } from './types/literal-type';
import { parse_infer_type } from './parsers/infer-type';

// tslint:disable:cyclomatic-complexity max-line-length
export const parse_native = (node: ts.Node): IElement<any> => {
  // prettier-ignore
  switch (node.kind) {
    case ts.SyntaxKind.AnyKeyword: return any_type;
    case ts.SyntaxKind.ArrayType: return parse_array_type(node as ts.ArrayTypeNode);
    case ts.SyntaxKind.BooleanKeyword: return boolean_type;
    case ts.SyntaxKind.CallSignature: return parse_call_signature(node as ts.CallSignatureDeclaration);
    case ts.SyntaxKind.ClassDeclaration: return parse_class_declaration(node as ts.ClassDeclaration);
    case ts.SyntaxKind.ConditionalType: return parse_conditional_type(node as ts.ConditionalTypeNode);
    case ts.SyntaxKind.ConstructSignature: return parse_construct_signature(node as ts.ConstructSignatureDeclaration);
    case ts.SyntaxKind.Constructor: return parse_constructor(node as ts.ConstructorDeclaration);
    case ts.SyntaxKind.ConstructorType: return parse_constructor_type(node as ts.ConstructorTypeNode);
    case ts.SyntaxKind.EnumDeclaration: return parse_enum_declaration(node as ts.EnumDeclaration);
    case ts.SyntaxKind.EnumMember: return parse_enum_member(node as ts.EnumMember);
    case ts.SyntaxKind.ExportAssignment: return parse_export_assignment(node as ts.ExportAssignment);
    case ts.SyntaxKind.ExportDeclaration: return parse_export_declaration(node as ts.ExportDeclaration);
    case ts.SyntaxKind.ExportSpecifier: return parse_export_specifier(node as ts.ExportSpecifier);
    case ts.SyntaxKind.ExpressionWithTypeArguments: return parse_expression_with_type_arguments(node as ts.ExpressionWithTypeArguments);
    case ts.SyntaxKind.FalseKeyword: return create_literal_type({value: false});
    case ts.SyntaxKind.FunctionDeclaration: return parse_function_declaration(node as ts.FunctionDeclaration);
    case ts.SyntaxKind.FunctionType: return parse_function_type(node as ts.FunctionTypeNode);
    case ts.SyntaxKind.ImportDeclaration: return parse_import_declaration(node as ts.ImportDeclaration);
    case ts.SyntaxKind.ImportEqualsDeclaration: return parse_import_equals_declaration(node as ts.ImportEqualsDeclaration);
    case ts.SyntaxKind.ImportSpecifier: return parse_import_specifier(node as ts.ImportSpecifier);
    case ts.SyntaxKind.IndexSignature: return parse_index_signature(node as ts.IndexSignatureDeclaration);
    case ts.SyntaxKind.IndexedAccessType: return parse_indexed_access_type(node as ts.IndexedAccessTypeNode);
    case ts.SyntaxKind.InferType: return parse_infer_type(node as ts.InferTypeNode);
    case ts.SyntaxKind.InterfaceDeclaration: return parse_interface_declaration(node as ts.InterfaceDeclaration);
    case ts.SyntaxKind.IntersectionType: return parse_intersection_type(node as ts.IntersectionTypeNode);
    case ts.SyntaxKind.LiteralType: return parse_native((node as ts.LiteralTypeNode).literal);
    case ts.SyntaxKind.MappedType: return parse_mapped_type(node as ts.MappedTypeNode);
    case ts.SyntaxKind.MethodDeclaration: return parse_method_declaration(node as ts.MethodDeclaration);
    case ts.SyntaxKind.MethodSignature: return parse_method_signature(node as ts.MethodSignature);
    case ts.SyntaxKind.ModuleDeclaration: return parse_module_declaration(node as ts.ModuleDeclaration);
    case ts.SyntaxKind.NamespaceExportDeclaration: return parse_namespace_export_declaration(node as ts.NamespaceExportDeclaration);
    case ts.SyntaxKind.NeverKeyword: return never_type;
    case ts.SyntaxKind.NullKeyword: return null_type;
    case ts.SyntaxKind.NumberKeyword: return number_type;
    case ts.SyntaxKind.NumericLiteral: return create_literal_type({value: Number((node as ts.NumericLiteral).text)});
    case ts.SyntaxKind.ObjectKeyword: return object_type;
    case ts.SyntaxKind.Parameter: return parse_parameter_declaration(node as ts.ParameterDeclaration);
    case ts.SyntaxKind.ParenthesizedType: return parse_parenthesized_type(node as ts.ParenthesizedTypeNode);
    case ts.SyntaxKind.PropertyDeclaration: return parse_property_declaration(node as ts.PropertyDeclaration);
    case ts.SyntaxKind.PropertySignature: return parse_property_signature(node as ts.PropertySignature);
    case ts.SyntaxKind.SourceFile: return parse_source_file(node as ts.SourceFile);
    case ts.SyntaxKind.StringKeyword: return string_type;
    case ts.SyntaxKind.StringLiteral: return create_literal_type({value: (node as ts.StringLiteral).text});
    case ts.SyntaxKind.SymbolKeyword: return symbol_type;
    case ts.SyntaxKind.ThisType: return this_type;
    case ts.SyntaxKind.TrueKeyword: return create_literal_type({value: true});
    case ts.SyntaxKind.TupleType: return parse_tuple_type(node as ts.TupleTypeNode);
    case ts.SyntaxKind.TypeAliasDeclaration: return parse_type_alias_declaration(node as ts.TypeAliasDeclaration);
    case ts.SyntaxKind.TypeLiteral: return parse_type_literal(node as ts.TypeLiteralNode);
    case ts.SyntaxKind.TypeOperator: return parse_type_operator(node as ts.TypeOperatorNode);
    case ts.SyntaxKind.TypeParameter: return parse_type_parameter(node as ts.TypeParameterDeclaration);
    case ts.SyntaxKind.TypePredicate: return parse_type_predicater(node as ts.TypePredicateNode);
    case ts.SyntaxKind.TypeQuery: return parse_type_query(node as ts.TypeQueryNode);
    case ts.SyntaxKind.TypeReference: return parse_type_reference(node as ts.TypeReferenceNode);
    case ts.SyntaxKind.UndefinedKeyword: return undefined_type;
    case ts.SyntaxKind.UnionType: return parse_union_type(node as ts.UnionTypeNode);
    case ts.SyntaxKind.VariableStatement: return parse_variable_statement(node as ts.VariableStatement);
    case ts.SyntaxKind.VoidKeyword: return void_type;
    default: throw new Error(`Unexpected ts-kind ${node.kind} ( ${ts.SyntaxKind[node.kind]} ): ${emit_native(node)}`);
  }
};

export const parse = (code: string) =>
  parse_native(
    ts.createSourceFile(
      '',
      code,
      ts.ScriptTarget.Latest,
      /*setParentNodes */ false,
    ),
  ) as ITopLevelElement;

export const parse_type = (type_string: string): IType => {
  const code = `type X = ${type_string}`;
  const top_level_element = parse(code);
  const type_declaration = top_level_element.members[0] as ITypeDeclaration;
  return type_declaration.type!;
};
