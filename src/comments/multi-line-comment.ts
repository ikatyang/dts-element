import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement, IElementOptions} from '../element';

export interface IMultiLineCommentOptions extends IElementOptions {
  text: string;
  align?: boolean;
  prefix?: string;
}

export interface IMultiLineComment
  extends IElement<ElementKind.MultiLineComment>, IMultiLineCommentOptions {}

export const create_multi_line_comment = (options: IMultiLineCommentOptions): IMultiLineComment => ({
  ...create_element(ElementKind.MultiLineComment),
  ...options,
});

// tslint:disable:ter-indent

export const transform_multi_line_comment = (element: IMultiLineComment, path: IElement<any>[]) =>
  ts.addSyntheticTrailingComment(
    /* node                */ ts.createOmittedExpression(),
    /* kind                */ ts.SyntaxKind.MultiLineCommentTrivia,
    /* text                */ element.text
                                .replace(
                                  /^/mg,
                                  (element.prefix === undefined)
                                    ? ''
                                    : element.prefix,
                                )
                                .replace(
                                  /\n|$/g,
                                  match =>
                                    (element.align === true)
                                      ? (match === '\n')
                                        ? '\n *'
                                        : '\n '
                                      : match,
                                ),
    /* hasTrailingNewLine  */ false,
  );
