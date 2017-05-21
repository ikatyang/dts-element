import * as ts from 'typescript';
import {IElement} from './element';
import {create_top_level_element, ITopLevelElement} from './others/top-level-element';
import {create_triple_slash_reference} from './others/triple-slash-reference';

export const parse_native = (node: ts.Node): IElement<any> => {
  switch (node.kind) {
    case ts.SyntaxKind.SourceFile:
      const source_file = node as ts.SourceFile;
      return create_top_level_element({
        members: [
          ...source_file.referencedFiles.map(
            file => create_triple_slash_reference({
              path: file.fileName,
            }),
          ),
          ...source_file.typeReferenceDirectives.map(
            file => create_triple_slash_reference({
              types: file.fileName,
            }),
          ),
          ...source_file.statements.map(parse_native),
        ],
      });
    default:
      throw new Error(`Unexpected ts-kind ${node.kind} ( ${ts.SyntaxKind[node.kind]} )`);
  }
};

export const parse = (code: string) =>
  parse_native(ts.createSourceFile('', code, ts.ScriptTarget.Latest, /*setParentNodes */ false)) as ITopLevelElement;
