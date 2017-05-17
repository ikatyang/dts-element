import * as declarations from './declarations/index';
import * as types from './types/index';

export type IDeclaration =
  | declarations.IFunctionDeclaration
  | declarations.IGenericDeclaration
  | declarations.IParameterDeclaration
  | declarations.IVariableDeclaration
;

export type IType =
  | types.IArrayType
  | types.IConstructorType
  | types.IFunctionType
  | types.IGenericType
  | types.IIntersectionType
  | types.IKeyofType
  | types.ILiteralType
  | types.INativeType
  | types.ITypeofType
  | types.ITupleType
  | types.IUnionType
;
