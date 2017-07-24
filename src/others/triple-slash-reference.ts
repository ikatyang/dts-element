import * as ts from 'typescript';
import { ElementKind } from '../constants';
import { create_element, IElement, IElementOptions } from '../element';

export interface ITripleSlashReferenceOptions extends IElementOptions {
  path?: string;
  types?: string;
}

export interface ITripleSlashReference
  extends IElement<ElementKind.TripleSlashReference>,
    ITripleSlashReferenceOptions {}

export const create_triple_slash_reference = (
  options: ITripleSlashReferenceOptions,
): ITripleSlashReference => ({
  ...create_element(ElementKind.TripleSlashReference),
  ...options,
});

/**
 * @hidden
 */
export const transform_triple_slash_reference = (
  element: ITripleSlashReference,
  _path: IElement<any>[],
) =>
  ts.addSyntheticTrailingComment(
    /* node                */ ts.createOmittedExpression(),
    /* kind                */ ts.SyntaxKind.SingleLineCommentTrivia,
    /* text                */ element.path !== undefined
      ? `/ <reference path="${element.path}" />`
      : `/ <reference types="${element.types}" />`,
    /* hasTrailingNewLine  */ false,
  );
