import {IJSDocComment} from './comments/jsdoc-comment';
import {IMultiLineComment} from './comments/multi-line-comment';
import {ISingleLineComment} from './comments/single-line-comment';
import {IClassDeclaration} from './declarations/class-declaration';
import {IEnumDeclaration} from './declarations/enum-declaration';
import {IFunctionDeclaration} from './declarations/function-declaration';
import {IGenericDeclaration} from './declarations/generic-declaration';
import {IGlobalDeclaration} from './declarations/global-declaration';
import {IInterfaceDeclaration} from './declarations/interface-declaration';
import {IModuleDeclaration} from './declarations/module-declaration';
import {INamespaceDeclaration} from './declarations/namespace-declaration';
import {IParameterDeclaration} from './declarations/parameter-declaration';
import {ITypeDeclaration} from './declarations/type-declaration';
import {IVariableDeclaration} from './declarations/variable-declaration';
import {IImportNamed} from './import-exports/import-named';
import {ITripleSlashReference} from './others/triple-slash-reference';
import {IArrayType} from './types/array-type';
import {IConstructorType} from './types/constructor-type';
import {IFunctionType} from './types/function-type';
import {IGeneralType} from './types/general-type';
import {IIntersectionType} from './types/intersection-type';
import {IKeyofType} from './types/keyof-type';
import {ILiteralType} from './types/literal-type';
import {IMappedType} from './types/mapped-type';
import {INativeType} from './types/native-type';
import {IObjectType} from './types/object-type';
import {ISubType} from './types/sub-type';
import {ITupleType} from './types/tuple-type';
import {ITypeofType} from './types/typeof-type';
import {IUnionType} from './types/union-type';

export type ITopLevelMember =
  | IImportExport
  | IModuleDeclaration
  | IModuleMember
  | ITripleSlashReference
  | IGlobalDeclaration
;

export type IImportExport =
  | IImportNamed
;

export type IModuleMember =
  | IClassDeclaration
  | IComment
  | IEnumDeclaration
  | IFunctionDeclaration
  | IInterfaceDeclaration
  | INamespaceDeclaration
  | ITypeDeclaration
  | IVariableDeclaration
;

export type IComment =
  | IJSDocComment
  | IMultiLineComment
  | ISingleLineComment
;

export type IDeclaration =
  | IClassDeclaration
  | IEnumDeclaration
  | IFunctionDeclaration
  | IGenericDeclaration
  | IInterfaceDeclaration
  | IParameterDeclaration
  | ITypeDeclaration
  | IVariableDeclaration
;

export type IType =
  | IArrayType
  | IConstructorType
  | IFunctionType
  | IGeneralType
  | IIntersectionType
  | IKeyofType
  | ILiteralType
  | IMappedType
  | INativeType
  | IObjectType
  | ISubType
  | ITupleType
  | ITypeofType
  | IUnionType
;
