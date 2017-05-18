import * as ts from 'typescript';
import {ElementKind} from '../constants';
import {IEnumDeclaration} from '../declarations/enum-declaration';
import {create_element, IElement} from '../element';

export interface IEnumTypeOptions {
  name: string | IEnumDeclaration;
}

export interface IEnumType
  extends IElement<ElementKind.EnumType>, IEnumTypeOptions {}

export const create_enum_type = (options: IEnumTypeOptions): IEnumType => ({
  ...create_element(ElementKind.EnumType),
  ...options,
});

export const transform_enum_type = (element: IEnumType, _path: IElement<any>[]) =>
  ts.createTypeReferenceNode(
    /* typeName      */ (typeof element.name === 'string')
                          ? element.name
                          : element.name.name,
    /* typeArguments */ undefined,
  );