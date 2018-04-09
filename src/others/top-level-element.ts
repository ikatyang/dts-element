import * as ts from 'typescript';
import { ITopLevelMember } from '../collections';
import { ElementKind } from '../constants';
import {
  create_element,
  is_element,
  IElement,
  IElementOptions,
} from '../element';
import { transform } from '../transform';

export interface ITopLevelElementOptions extends IElementOptions {
  members: ITopLevelMember[];
}

export interface ITopLevelElement
  extends IElement<ElementKind.TopLevelElement>,
    ITopLevelElementOptions {}

export const create_top_level_element = (
  options: ITopLevelElementOptions,
): ITopLevelElement => ({
  ...create_element(ElementKind.TopLevelElement),
  ...options,
});

export const is_top_level_element = (value: any): value is ITopLevelElement =>
  is_element(value) && value.kind === ElementKind.TopLevelElement;

/**
 * @hidden
 */
export const transform_top_level_element = (
  element: ITopLevelElement,
  path: IElement<any>[],
) => {
  const source_file = ts.createSourceFile(
    /* fileName        */ '',
    /* sourceText      */ '',
    /* languageVersion */ ts.ScriptTarget.Latest,
    /* setParentNodes  */ false,
    /* scriptKind      */ ts.ScriptKind.TS,
  );

  source_file.statements = ts.createNodeArray(
    element.members.map(member => transform(member, path) as ts.Statement),
  );
  return source_file;
};
