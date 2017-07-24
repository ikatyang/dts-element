import * as ts from 'typescript';
import {
  create_top_level_element,
  ITopLevelElement,
} from '../others/top-level-element';
import { create_triple_slash_reference } from '../others/triple-slash-reference';
import { parse_native } from '../parse';

export const parse_source_file = (node: ts.SourceFile): ITopLevelElement =>
  create_top_level_element({
    members: [
      ...node.referencedFiles.map(file =>
        create_triple_slash_reference({
          path: file.fileName,
        }),
      ),
      ...node.typeReferenceDirectives.map(file =>
        create_triple_slash_reference({
          types: file.fileName,
        }),
      ),
      ...node.statements.map(parse_native),
    ],
  });
