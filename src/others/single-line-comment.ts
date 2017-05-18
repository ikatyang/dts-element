import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';

export interface ISingleLineCommentOptions {
  text: string;
  prefix?: string;
}

export interface ISingleLineComment
  extends IElement<ElementKind.SingleLineComment>, ISingleLineCommentOptions {}

export const create_single_line_comment = (options: ISingleLineCommentOptions): ISingleLineComment => ({
  ...create_element(ElementKind.SingleLineComment),
  ...options,
});

export const transform_single_line_comment = (element: ISingleLineComment, path: IElement<any>[]) => {
  const node = ts.createOmittedExpression();
  element.text.split('\n').forEach((line_text, index, lines) => {
    ts.addSyntheticTrailingComment(
      /* node                */ node,
      /* kind                */ ts.SyntaxKind.SingleLineCommentTrivia,
      /* text                */ `${element.prefix || ''}${line_text}`,
      /* hasTrailingNewLine  */ (index !== lines.length - 1),
    );
  });
  return node;
};
