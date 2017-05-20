import * as ts from 'typescript';
import {add_jsdoc_comment, transform_jsdoc_comment} from './comments/jsdoc-comment';
import {transform_multi_line_comment} from './comments/multi-line-comment';
import {transform_single_line_comment} from './comments/single-line-comment';
import {ElementKind} from './constants';
import {transform_class_declaration} from './declarations/class-declaration';
import {transform_enum_declaration} from './declarations/enum-declaration';
import {transform_function_declaration} from './declarations/function-declaration';
import {transform_generic_declaration} from './declarations/generic-declaration';
import {transform_global_declaration} from './declarations/global-declaration';
import {transform_interface_declaration} from './declarations/interface-declaration';
import {transform_module_declaration} from './declarations/module-declaration';
import {transform_namespace_declaration} from './declarations/namespace-declaration';
import {transform_parameter_declaration} from './declarations/parameter-declaration';
import {transform_type_declaration} from './declarations/type-declaration';
import {transform_variable_declaration} from './declarations/variable-declaration';
import {IElement} from './element';
import {transform_export_equal} from './import-exports/export-equal';
import {transform_export_named} from './import-exports/export-named';
import {transform_import_named} from './import-exports/import-named';
import {transform_import_namespace} from './import-exports/import-namespace';
import {transform_class_member} from './members/class-member';
import {transform_export_member} from './members/export-member';
import {transform_import_member} from './members/import-member';
import {transform_object_member} from './members/object-member';
import {transform_index_signature} from './others/index-signature';
import {transform_top_level_element} from './others/top-level-element';
import {transform_triple_slash_reference} from './others/triple-slash-reference';
import {transform_type_predicate} from './others/type-predicate';
import {transform_array_type} from './types/array-type';
import {transform_constructor_type} from './types/constructor-type';
import {transform_function_type} from './types/function-type';
import {transform_general_type} from './types/general-type';
import {transform_intersection_type} from './types/intersection-type';
import {transform_keyof_type} from './types/keyof-type';
import {transform_literal_type} from './types/literal-type';
import {transform_mapped_type} from './types/mapped-type';
import {transform_native_type} from './types/native-type';
import {transform_object_type} from './types/object-type';
import {transform_sub_type} from './types/sub-type';
import {transform_tuple_type} from './types/tuple-type';
import {transform_typeof_type} from './types/typeof-type';
import {transform_union_type} from './types/union-type';

export type Transformer = (element: IElement<any>, path: IElement<any>[]) => ts.Node;

// tslint:disable-next-line:cyclomatic-complexity
const select_transformer = (element: IElement<any>): Transformer => {
  switch (element.kind) {
    case ElementKind.ArrayType: return transform_array_type;
    case ElementKind.ClassDeclaration: return transform_class_declaration;
    case ElementKind.ClassMember: return transform_class_member;
    case ElementKind.ConstructorType: return transform_constructor_type;
    case ElementKind.EnumDeclaration: return transform_enum_declaration;
    case ElementKind.ExportEqual: return transform_export_equal;
    case ElementKind.ExportMember: return transform_export_member;
    case ElementKind.ExportNamed: return transform_export_named;
    case ElementKind.FunctionDeclaration: return transform_function_declaration;
    case ElementKind.FunctionType: return transform_function_type;
    case ElementKind.GeneralType: return transform_general_type;
    case ElementKind.GenericDeclaration: return transform_generic_declaration;
    case ElementKind.GlobalDeclaration: return transform_global_declaration;
    case ElementKind.ImportMember: return transform_import_member;
    case ElementKind.ImportNamed: return transform_import_named;
    case ElementKind.ImportNamespace: return transform_import_namespace;
    case ElementKind.IndexSignature: return transform_index_signature;
    case ElementKind.InterfaceDeclaration: return transform_interface_declaration;
    case ElementKind.IntersectionType: return transform_intersection_type;
    case ElementKind.JSDocComment: return transform_jsdoc_comment;
    case ElementKind.KeyofType: return transform_keyof_type;
    case ElementKind.LiteralType: return transform_literal_type;
    case ElementKind.MappedType: return transform_mapped_type;
    case ElementKind.ModuleDeclaration: return transform_module_declaration;
    case ElementKind.MultiLineComment: return transform_multi_line_comment;
    case ElementKind.NamespaceDeclaration: return transform_namespace_declaration;
    case ElementKind.NativeType: return transform_native_type;
    case ElementKind.ObjectMember: return transform_object_member;
    case ElementKind.ObjectType: return transform_object_type;
    case ElementKind.ParameterDeclaration: return transform_parameter_declaration;
    case ElementKind.SingleLineComment: return transform_single_line_comment;
    case ElementKind.SubType: return transform_sub_type;
    case ElementKind.TopLevelElement: return transform_top_level_element;
    case ElementKind.TripleSlashReference: return transform_triple_slash_reference;
    case ElementKind.TupleType: return transform_tuple_type;
    case ElementKind.TypeDeclaration: return transform_type_declaration;
    case ElementKind.TypePredicate: return transform_type_predicate;
    case ElementKind.TypeofType: return transform_typeof_type;
    case ElementKind.UnionType: return transform_union_type;
    case ElementKind.VariableDeclaration: return transform_variable_declaration;
    default: throw new Error(`Unexpected kind ${element.kind} ( ${ElementKind[element.kind as ElementKind]} )`);
  }
};

export const transform = (element: IElement<any>, path: IElement<any>[] = []): ts.Node => {
  const transformer = select_transformer(element);
  const node = transformer(element, [...path, element]);

  if (element.jsdoc !== undefined) {
    add_jsdoc_comment(node, element.jsdoc);
  }

  return node;
};
