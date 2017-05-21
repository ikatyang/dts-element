import * as ts from 'typescript';
import {any_type} from './constants';
import {IElement} from './element';
import {ITopLevelElement} from './others/top-level-element';
import {parse_source_file} from './parsers/source-file';
import {parse_variable_statement} from './parsers/variable-statement';

export const parse_native = (node: ts.Node): IElement<any> => {
  switch (node.kind) {
    case ts.SyntaxKind.AnyKeyword: return any_type;
    case ts.SyntaxKind.SourceFile: return parse_source_file(node as ts.SourceFile);
    case ts.SyntaxKind.VariableStatement: return parse_variable_statement(node as ts.VariableStatement);
    default:
      throw new Error(`Unexpected ts-kind ${node.kind} ( ${ts.SyntaxKind[node.kind]} )`);
  }
};

export const parse = (code: string) =>
  parse_native(ts.createSourceFile('', code, ts.ScriptTarget.Latest, /*setParentNodes */ false)) as ITopLevelElement;
