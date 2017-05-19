import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';

export interface IJSDocCommentOptions {
  text: string;
}

export interface IJSDocComment
  extends IElement<ElementKind.JSDocComment>, IJSDocCommentOptions {}

export const create_jsdoc_comment = (options: IJSDocCommentOptions): IJSDocComment => ({
  ...create_element(ElementKind.JSDocComment),
  ...options,
});

export interface IAddJSDocCommentOptions {
  method?: typeof ts.addSyntheticLeadingComment | typeof ts.addSyntheticTrailingComment;
  trailing_new_line?: boolean;
}

// tslint:disable:ter-indent
export const add_jsdoc_comment = <T extends ts.Node>(node: T, text: string, options: IAddJSDocCommentOptions = {}): T =>
  (options.method || ts.addSyntheticLeadingComment)(
    /* node                */ node,
    /* kind                */ ts.SyntaxKind.MultiLineCommentTrivia,
    /* text                */ `*\n * ${
                                text
                                  .replace(/\n/g, '\n * ')
                                  .replace(/[^\S\n]+$/mg, '')
                              }\n `,
    /* hasTrailingNewLine  */ (options.trailing_new_line === undefined)
                                ? true
                                : options.trailing_new_line,
  );
// tslint:enable:ter-indent

export const transform_jsdoc_comment = (element: IJSDocComment, path: IElement<any>[]) =>
  add_jsdoc_comment(ts.createOmittedExpression(), element.text, {
    trailing_new_line: false,
    method: ts.addSyntheticTrailingComment,
  });