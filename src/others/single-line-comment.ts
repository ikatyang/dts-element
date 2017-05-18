import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';

export interface ISingleLineCommentOptions {
  text: string;
  leading_space?: boolean;
}

export interface ISingleLineComment
  extends IElement<ElementKind.SingleLineComment>, ISingleLineCommentOptions {}

export const create_single_line_comment = (options: ISingleLineCommentOptions): ISingleLineComment => ({
  ...create_element(ElementKind.SingleLineComment),
  ...options,
});

export const transform_single_line_comment = (element: ISingleLineComment, path: IElement<any>[]) => {
  const node = ts.createOmittedExpression();
  const prefix = (element.leading_space === false)
    ? ''
    : ' ';
  element.text.split('\n').forEach((line_text, index, lines) => {
    ts.addSyntheticTrailingComment(
      /* node                */ node,
      /* kind                */ ts.SyntaxKind.SingleLineCommentTrivia,
      /* text                */ `${prefix}${line_text}`,
      /* hasTrailingNewLine  */ (index !== lines.length - 1),
    );
  });
  return node;
};
