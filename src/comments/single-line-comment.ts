import * as ts from 'typescript';
import { ElementKind } from '../constants';
import { create_element, IElement, IElementOptions } from '../element';

export interface ISingleLineCommentOptions extends IElementOptions {
  text: string;
  prefix?: string;
}

export interface ISingleLineComment
  extends IElement<ElementKind.SingleLineComment>,
    ISingleLineCommentOptions {}

export const create_single_line_comment = (
  options: ISingleLineCommentOptions,
): ISingleLineComment => ({
  ...create_element(ElementKind.SingleLineComment),
  ...options,
});

/**
 * @hidden
 */
export interface IAddSingleLineCommentOptions {
  method?:
    | typeof ts.addSyntheticLeadingComment
    | typeof ts.addSyntheticTrailingComment;
  trailing_new_line?: boolean;
}

/**
 * @hidden
 */
export const add_single_line_comment = <T extends ts.Node>(
  node: T,
  element: ISingleLineComment,
  options: IAddSingleLineCommentOptions = {},
): T =>
  element.text
    .split('\n')
    .reduce(
      (current_node, line_text, index, lines) =>
        (options.method || ts.addSyntheticLeadingComment)(
          /* node                */ node,
          /* kind                */ ts.SyntaxKind.SingleLineCommentTrivia,
          /* text                */ (element.prefix === undefined
            ? ''
            : element.prefix) + line_text,
          /* hasTrailingNewLine  */ index !== lines.length - 1
            ? true
            : options.trailing_new_line === undefined
              ? true
              : options.trailing_new_line,
        ),
      node,
    );

/**
 * @hidden
 */
export const transform_single_line_comment = (
  element: ISingleLineComment,
  path: IElement<any>[],
) =>
  add_single_line_comment(ts.createOmittedExpression(), element, {
    trailing_new_line: false,
    method: ts.addSyntheticTrailingComment,
  });
