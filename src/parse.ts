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
import {parse_source_file} from './parsers/source-file';
import {parse_variable_statement} from './parsers/variable-statement';

export const parse_native = (node: ts.Node): IElement<any> => {
  switch (node.kind) {
    case ts.SyntaxKind.AnyKeyword: return any_type;
    case ts.SyntaxKind.BooleanKeyword: return boolean_type;
    case ts.SyntaxKind.NeverKeyword: return never_type;
    case ts.SyntaxKind.NullKeyword: return null_type;
    case ts.SyntaxKind.NumberKeyword: return number_type;
    case ts.SyntaxKind.ObjectKeyword: return object_type;
    case ts.SyntaxKind.SourceFile: return parse_source_file(node as ts.SourceFile);
    case ts.SyntaxKind.StringKeyword: return string_type;
    case ts.SyntaxKind.SymbolKeyword: return symbol_type;
    case ts.SyntaxKind.ThisType: return this_type;
    case ts.SyntaxKind.UndefinedKeyword: return undefined_type;
    case ts.SyntaxKind.VariableStatement: return parse_variable_statement(node as ts.VariableStatement);
    case ts.SyntaxKind.VoidKeyword: return void_type;
    default:
      throw new Error(`Unexpected ts-kind ${node.kind} ( ${ts.SyntaxKind[node.kind]} )`);
  }
};

export const parse = (code: string) =>
  parse_native(ts.createSourceFile('', code, ts.ScriptTarget.Latest, /*setParentNodes */ false)) as ITopLevelElement;
