import {ElementKind} from './constants';

export interface IElementOptions {
  jsdoc?: string;
}

export interface IElement<Kind extends ElementKind> extends IElementOptions {
  kind: Kind;
}

export const create_element = <Kind extends ElementKind>(kind: Kind): IElement<Kind> => ({kind});
