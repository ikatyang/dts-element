import * as ts from 'typescript';
import {ElementKind} from './constants';
import {transform_class_declaration, IClassDeclaration} from './declarations/class-declaration';
import {transform_enum_declaration, IEnumDeclaration} from './declarations/enum-declaration';
import {transform_function_declaration, IFunctionDeclaration} from './declarations/function-declaration';
import {transform_generic_declaration, IGenericDeclaration} from './declarations/generic-declaration';
import {transform_interface_declaration, IInterfaceDeclaration} from './declarations/interface-declaration';
import {transform_module_declaration, IModuleDeclaration} from './declarations/module-declaration';
import {transform_namespace_declaration, INamespaceDeclaration} from './declarations/namespace-declaration';
import {transform_parameter_declaration, IParameterDeclaration} from './declarations/parameter-declaration';
import {transform_type_declaration, ITypeDeclaration} from './declarations/type-declaration';
import {transform_variable_declaration, IVariableDeclaration} from './declarations/variable-declaration';
import {IElement} from './element';
import {transform_class_member, IClassMember} from './members/class-member';
import {transform_object_member, IObjectMember} from './members/object-member';
import {transform_index_signature, IIndexSignature} from './others/index-signature';
import {transform_top_level_element, ITopLevelElement} from './others/top-level-element';
import {transform_triple_slash_reference, ITripleSlashReference} from './others/triple-slash-reference';
import {transform_type_predicate, ITypePredicate} from './others/type-predicate';
import {transform_array_type, IArrayType} from './types/array-type';
import {transform_basic_type, IBasicType} from './types/basic-type';
import {transform_class_type, IClassType} from './types/class-type';
import {transform_constructor_type, IConstructorType} from './types/constructor-type';
import {transform_enum_type, IEnumType} from './types/enum-type';
import {transform_function_type, IFunctionType} from './types/function-type';
import {transform_generic_type, IGenericType} from './types/generic-type';
import {transform_interface_type, IInterfaceType} from './types/interface-type';
import {transform_intersection_type, IIntersectionType} from './types/intersection-type';
import {transform_keyof_type, IKeyofType} from './types/keyof-type';
import {transform_literal_type, ILiteralType} from './types/literal-type';
import {transform_native_type, INativeType} from './types/native-type';
import {transform_object_type, IObjectType} from './types/object-type';
import {transform_tuple_type, ITupleType} from './types/tuple-type';
import {transform_typed_type, ITypedType} from './types/typed-type';
import {transform_typeof_type, ITypeofType} from './types/typeof-type';
import {transform_union_type, IUnionType} from './types/union-type';

// tslint:disable-next-line:cyclomatic-complexity
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
    case ElementKind.ObjectMember:
      return transform_object_member(element as IObjectMember , path);
    case ElementKind.ConstructorType:
      return transform_constructor_type(element as IConstructorType , path);
    case ElementKind.IndexSignature:
      return transform_index_signature(element as IIndexSignature , path);
    case ElementKind.ObjectType:
      return transform_object_type(element as IObjectType , path);
    case ElementKind.BasicType:
      return transform_basic_type(element as IBasicType , path);
    case ElementKind.TypeDeclaration:
      return transform_type_declaration(element as ITypeDeclaration , path);
    case ElementKind.TypedType:
      return transform_typed_type(element as ITypedType , path);
    case ElementKind.InterfaceDeclaration:
      return transform_interface_declaration(element as IInterfaceDeclaration , path);
    case ElementKind.InterfaceType:
      return transform_interface_type(element as IInterfaceType , path);
    case ElementKind.ClassMember:
      return transform_class_member(element as IClassMember , path);
    case ElementKind.ClassDeclaration:
      return transform_class_declaration(element as IClassDeclaration , path);
    case ElementKind.ClassType:
      return transform_class_type(element as IClassType , path);
    case ElementKind.NamespaceDeclaration:
      return transform_namespace_declaration(element as INamespaceDeclaration , path);
    case ElementKind.ModuleDeclaration:
      return transform_module_declaration(element as IModuleDeclaration , path);
    case ElementKind.EnumDeclaration:
      return transform_enum_declaration(element as IEnumDeclaration , path);
    case ElementKind.EnumType:
      return transform_enum_type(element as IEnumType, path);
    case ElementKind.TypePredicate:
      return transform_type_predicate(element as ITypePredicate, path);
    case ElementKind.TripleSlashReference:
      return transform_triple_slash_reference(element as ITripleSlashReference, path);
    case ElementKind.TopLevelElement:
      return transform_top_level_element(element as ITopLevelElement, path);
    default:
      throw new Error(`Unexpected kind ${ElementKind[element.kind]} ( ${element.kind} )`);
  }
};
