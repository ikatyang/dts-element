import {ElementKind} from '../constants';
import {create_element, IElement} from '../element';

export interface ITripleSlashReferencePathOptions {
  path: string;
}

export interface ITripleSlashReferenceTypesOptions {
  types: string;
}

export type ITripleSlashReferenceOptions = ITripleSlashReferencePathOptions | ITripleSlashReferenceTypesOptions;

export interface ITripleSlashReferencePath
  extends IElement<ElementKind.TripleSlashReference>, ITripleSlashReferencePathOptions {}

export interface ITripleSlashReferenceTypes
  extends IElement<ElementKind.TripleSlashReference>, ITripleSlashReferenceTypesOptions {}

export type ITripleSlashReference = ITripleSlashReferencePath | ITripleSlashReferenceTypes;

export const create_triple_slash_reference = (options: ITripleSlashReferenceOptions): ITripleSlashReference => ({
  ...create_element(ElementKind.TripleSlashReference),
  ...options,
});

export const emit_triple_slash_reference = (triple_slash_reference: ITripleSlashReference) =>
  Reflect.has(triple_slash_reference, 'path')
    ? `/// <reference path="${(triple_slash_reference as ITripleSlashReferencePath).path}" />`
    : `/// <reference types="${(triple_slash_reference as ITripleSlashReferenceTypes).types}" />`;
