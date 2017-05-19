import {ElementKind} from './constants';

export interface IElement<Kind extends ElementKind = ElementKind> {
  kind: Kind;
}

export const create_element = <Kind extends ElementKind>(kind: Kind): IElement<Kind> => ({kind});
