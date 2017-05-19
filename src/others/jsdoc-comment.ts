import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';
import {create_multi_line_comment, transform_multi_line_comment} from './multi-line-comment';

export interface IJSDocCommentOptions {
  text: string;
}

export interface IJSDocComment
  extends IElement<ElementKind.JSDocComment>, IJSDocCommentOptions {}

export const create_jsdoc_comment = (options: IJSDocCommentOptions): IJSDocComment => ({
  ...create_element(ElementKind.JSDocComment),
  ...options,
});

export const transform_jsdoc_comment = (element: IJSDocComment, path: IElement<any>[]) =>
  transform_multi_line_comment(
    create_multi_line_comment({
      text: `*${element.text.replace(/^|\n/g, '\n ').replace(/[^\S\n]+$/mg, '')}`,
      align: true,
    }),
    [...path, element],
  );
