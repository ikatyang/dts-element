import * as ts from 'typescript';
import {ElementKind} from './constants';
import {transform_generic_declaration, IGenericDeclaration} from './declarations/generic-declaration';
import {IElement} from './element';
import {transform_array_type, IArrayType} from './types/array-type';
import {transform_generic_type, IGenericType} from './types/generic-type';
import {transform_native_type, INativeType} from './types/native-type';

export const transform = (element: IElement<any>, path: IElement<any>[] = []): ts.Node => {
  switch (element.kind) {
    case ElementKind.GenericDeclaration:
      return transform_generic_declaration(element as IGenericDeclaration , path);
    case ElementKind.GenericType:
      return transform_generic_type(element as IGenericType , path);
    case ElementKind.NativeType:
      return transform_native_type(element as INativeType , path);
    case ElementKind.ArrayType:
      return transform_array_type(element as IArrayType , path);
    default:
      throw new Error(`Unexpected kind ${ElementKind[element.kind]} ( ${element.kind} )`);
  }
};
