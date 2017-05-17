// tslint:disable-next-line:no-unused-variable
import {ElementKind} from './constants';
import {IElement} from './element';

export type IType = IElement<
  | ElementKind.GenericType
  | ElementKind.NativeType
  | ElementKind.ArrayType
>;
