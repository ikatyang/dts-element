import * as ts from 'typescript';
import {ElementKind} from './constants';
import {transform_function_declaration, IFunctionDeclaration} from './declarations/function-declaration';
import {transform_generic_declaration, IGenericDeclaration} from './declarations/generic-declaration';
import {transform_parameter_declaration, IParameterDeclaration} from './declarations/parameter-declaration';
import {transform_variable_declaration, IVariableDeclaration} from './declarations/variable-declaration';
import {IElement} from './element';
import {transform_array_type, IArrayType} from './types/array-type';
import {transform_function_type, IFunctionType} from './types/function-type';
import {transform_generic_type, IGenericType} from './types/generic-type';
import {transform_intersection_type, IIntersectionType} from './types/intersection-type';
import {transform_keyof_type, IKeyofType} from './types/keyof-type';
import {transform_literal_type, ILiteralType} from './types/literal-type';
import {transform_native_type, INativeType} from './types/native-type';
import {transform_tuple_type, ITupleType} from './types/tuple-type';
import {transform_typeof_type, ITypeofType} from './types/typeof-type';
import {transform_union_type, IUnionType} from './types/union-type';

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
    case ElementKind.ParameterDeclaration:
      return transform_parameter_declaration(element as IParameterDeclaration , path);
    case ElementKind.FunctionType:
      return transform_function_type(element as IFunctionType , path);
    case ElementKind.FunctionDeclaration:
      return transform_function_declaration(element as IFunctionDeclaration , path);
    case ElementKind.IntersectionType:
      return transform_intersection_type(element as IIntersectionType , path);
    case ElementKind.UnionType:
      return transform_union_type(element as IUnionType , path);
    case ElementKind.LiteralType:
      return transform_literal_type(element as ILiteralType , path);
    case ElementKind.KeyofType:
      return transform_keyof_type(element as IKeyofType , path);
    case ElementKind.TypeofType:
      return transform_typeof_type(element as ITypeofType , path);
    case ElementKind.TupleType:
      return transform_tuple_type(element as ITupleType , path);
    case ElementKind.VariableDeclaration:
      return transform_variable_declaration(element as IVariableDeclaration , path);
    default:
      throw new Error(`Unexpected kind ${ElementKind[element.kind]} ( ${element.kind} )`);
  }
};