import { IMultiLineComment } from './comments/multi-line-comment';
import { ISingleLineComment } from './comments/single-line-comment';
import { ElementKind } from './constants';

export interface IElementOptions {
  jsdoc?: string;
  comments?: (ISingleLineComment | IMultiLineComment)[];
}

export interface IElement<Kind extends ElementKind> extends IElementOptions {
  kind: Kind;
}

export const create_element = <Kind extends ElementKind>(
  kind: Kind,
): IElement<Kind> => ({ kind });
