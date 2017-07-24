import * as ts from 'typescript';
import { ElementKind } from '../constants';
import { create_element, IElement, IElementOptions } from '../element';

export interface IMultiLineCommentOptions extends IElementOptions {
  text: string;
  align?: boolean;
  prefix?: string;
}

export interface IMultiLineComment
  extends IElement<ElementKind.MultiLineComment>,
    IMultiLineCommentOptions {}

export const create_multi_line_comment = (
  options: IMultiLineCommentOptions,
): IMultiLineComment => ({
  ...create_element(ElementKind.MultiLineComment),
  ...options,
});

/**
 * @hidden
 */
export interface IAddMultiLineCommentOptions {
  method?:
    | typeof ts.addSyntheticLeadingComment
    | typeof ts.addSyntheticTrailingComment;
  trailing_new_line?: boolean;
}

/**
 * @hidden
 */
// tslint:disable:ter-indent
export const add_multi_line_comment = <T extends ts.Node>(
  node: T,
  element: IMultiLineComment,
  options: IAddMultiLineCommentOptions = {},
): T =>
  (options.method || ts.addSyntheticLeadingComment)(
    /* node                */ node,
    /* kind                */ ts.SyntaxKind.MultiLineCommentTrivia,
    /* text                */ element.text
      .replace(/^/gm, element.prefix === undefined ? '' : element.prefix)
      .replace(
        /\n|$/g,
        match =>
          element.align === true ? (match === '\n' ? '\n *' : '\n ') : match,
      ),
    /* hasTrailingNewLine  */ options.trailing_new_line === undefined
      ? true
      : options.trailing_new_line,
  );
// tslint:enable:ter-indent

/**
 * @hidden
 */
export const transform_multi_line_comment = (
  element: IMultiLineComment,
  _path: IElement<any>[],
) =>
  add_multi_line_comment(ts.createOmittedExpression(), element, {
    trailing_new_line: false,
    method: ts.addSyntheticTrailingComment,
  });
