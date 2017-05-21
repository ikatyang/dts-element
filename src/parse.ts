import * as ts from 'typescript';
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
import {IElement} from './element';
import {ITopLevelElement} from './others/top-level-element';
import {parse_array_type} from './parsers/array-type';
import {parse_call_signature} from './parsers/call-signature';
import {parse_construct_signature} from './parsers/construct-signature';
import {parse_constructor_type} from './parsers/constructor-type';
import {parse_function_type} from './parsers/function-type';
import {parse_index_signature} from './parsers/index-signature';
import {parse_indexed_access_type} from './parsers/indexed-access-type';
import {parse_intersection_type} from './parsers/intersection-type';
import {parse_mapped_type} from './parsers/mapped-type';
import {parse_method_signature} from './parsers/method-signature';
import {parse_parameter_declaration} from './parsers/parameter-declaration';
import {parse_property_signature} from './parsers/property-signature';
import {parse_source_file} from './parsers/source-file';
import {parse_tuple_type} from './parsers/tuple-type';
import {parse_type_literal} from './parsers/type-literal';
import {parse_type_operator} from './parsers/type-operator';
import {parse_type_parameter} from './parsers/type-parameter';
import {parse_type_predicater} from './parsers/type-predicate';
import {parse_type_query} from './parsers/type-query';
import {parse_type_reference} from './parsers/type-reference';
import {parse_union_type} from './parsers/union-type';
import {parse_variable_statement} from './parsers/variable-statement';
import {create_literal_type} from './types/literal-type';

// tslint:disable-next-line:cyclomatic-complexity
export const parse_native = (node: ts.Node): IElement<any> => {
  switch (node.kind) {
    case ts.SyntaxKind.AnyKeyword: return any_type;
    case ts.SyntaxKind.ArrayType: return parse_array_type(node as ts.ArrayTypeNode);
    case ts.SyntaxKind.BooleanKeyword: return boolean_type;
    case ts.SyntaxKind.CallSignature: return parse_call_signature(node as ts.CallSignatureDeclaration);
    case ts.SyntaxKind.ConstructSignature: return parse_construct_signature(node as ts.ConstructSignatureDeclaration);
    case ts.SyntaxKind.ConstructorType: return parse_constructor_type(node as ts.ConstructorTypeNode);
    case ts.SyntaxKind.FalseKeyword: return create_literal_type({value: false});
    case ts.SyntaxKind.FunctionType: return parse_function_type(node as ts.FunctionTypeNode);
    case ts.SyntaxKind.IndexedAccessType: return parse_indexed_access_type(node as ts.IndexedAccessTypeNode);
    case ts.SyntaxKind.IntersectionType: return parse_intersection_type(node as ts.IntersectionTypeNode);
    case ts.SyntaxKind.LiteralType: return parse_native((node as ts.LiteralTypeNode).literal);
    case ts.SyntaxKind.MappedType: return parse_mapped_type(node as ts.MappedTypeNode);
    case ts.SyntaxKind.MethodSignature: return parse_method_signature(node as ts.MethodSignature);
    case ts.SyntaxKind.NeverKeyword: return never_type;
    case ts.SyntaxKind.NullKeyword: return null_type;
    case ts.SyntaxKind.NumberKeyword: return number_type;
    case ts.SyntaxKind.NumericLiteral: return create_literal_type({value: Number((node as ts.NumericLiteral).text)});
    case ts.SyntaxKind.ObjectKeyword: return object_type;
    case ts.SyntaxKind.PropertySignature: return parse_property_signature(node as ts.PropertySignature);
    case ts.SyntaxKind.SourceFile: return parse_source_file(node as ts.SourceFile);
    case ts.SyntaxKind.StringKeyword: return string_type;
    case ts.SyntaxKind.StringLiteral: return create_literal_type({value: (node as ts.StringLiteral).text});
    case ts.SyntaxKind.SymbolKeyword: return symbol_type;
    case ts.SyntaxKind.ThisType: return this_type;
    case ts.SyntaxKind.TrueKeyword: return create_literal_type({value: true});
    case ts.SyntaxKind.TupleType: return parse_tuple_type(node as ts.TupleTypeNode);
    case ts.SyntaxKind.TypeLiteral: return parse_type_literal(node as ts.TypeLiteralNode);
    case ts.SyntaxKind.TypeOperator: return parse_type_operator(node as ts.TypeOperatorNode);
    case ts.SyntaxKind.TypeParameter: return parse_type_parameter(node as ts.TypeParameterDeclaration);
    case ts.SyntaxKind.TypeQuery: return parse_type_query(node as ts.TypeQueryNode);
    case ts.SyntaxKind.TypeReference: return parse_type_reference(node as ts.TypeReferenceNode);
    case ts.SyntaxKind.UndefinedKeyword: return undefined_type;
    case ts.SyntaxKind.UnionType: return parse_union_type(node as ts.UnionTypeNode);
    case ts.SyntaxKind.VariableStatement: return parse_variable_statement(node as ts.VariableStatement);
    case ts.SyntaxKind.VoidKeyword: return void_type;
    case ts.SyntaxKind.TypePredicate: return parse_type_predicater(node as ts.TypePredicateNode);
    case ts.SyntaxKind.IndexSignature: return parse_index_signature(node as ts.IndexSignatureDeclaration);
    case ts.SyntaxKind.Parameter: return parse_parameter_declaration(node as ts.ParameterDeclaration);
    default:
      throw new Error(`Unexpected ts-kind ${node.kind} ( ${ts.SyntaxKind[node.kind]} )`);
  }
};

export const parse = (code: string) =>
  parse_native(ts.createSourceFile('', code, ts.ScriptTarget.Latest, /*setParentNodes */ false)) as ITopLevelElement;
