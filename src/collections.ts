import { IJSDocComment } from './comments/jsdoc-comment';
import { IMultiLineComment } from './comments/multi-line-comment';
import { ISingleLineComment } from './comments/single-line-comment';
import { IClassDeclaration } from './declarations/class-declaration';
import { IEnumDeclaration } from './declarations/enum-declaration';
import { IFunctionDeclaration } from './declarations/function-declaration';
import { IGenericDeclaration } from './declarations/generic-declaration';
import { IGlobalDeclaration } from './declarations/global-declaration';
import { IInterfaceDeclaration } from './declarations/interface-declaration';
import { IModuleDeclaration } from './declarations/module-declaration';
import { INamespaceDeclaration } from './declarations/namespace-declaration';
import { IParameterDeclaration } from './declarations/parameter-declaration';
import { ITypeDeclaration } from './declarations/type-declaration';
import { IVariableDeclaration } from './declarations/variable-declaration';
import { IExportDefault } from './import-exports/export-default';
import { IExportEqual } from './import-exports/export-equal';
import { IExportNamed } from './import-exports/export-named';
import { IExportNamespace } from './import-exports/export-namespace';
import { IImportEqual } from './import-exports/import-equal';
import { IImportNamed } from './import-exports/import-named';
import { IImportNamespace } from './import-exports/import-namespace';
import { ITripleSlashReference } from './others/triple-slash-reference';
import { IArrayType } from './types/array-type';
import { IConditionalType } from './types/conditional-type';
import { IConstructorType } from './types/constructor-type';
import { IFunctionType } from './types/function-type';
import { IGeneralType } from './types/general-type';
import { IInferType } from './types/infer-type';
import { IIntersectionType } from './types/intersection-type';
import { IKeyofType } from './types/keyof-type';
import { ILiteralType } from './types/literal-type';
import { IMappedType } from './types/mapped-type';
import { INativeType } from './types/native-type';
import { IObjectType } from './types/object-type';
import { ISubType } from './types/sub-type';
import { ITupleType } from './types/tuple-type';
import { ITypeofType } from './types/typeof-type';
import { IUnionType } from './types/union-type';

export type ITopLevelMember =
  | IImportExport
  | IModuleDeclaration
  | IModuleMember
  | ITripleSlashReference
  | IGlobalDeclaration;

export type IImportExport =
  | IExportDefault
  | IExportEqual
  | IExportNamed
  | IExportNamespace
  | IImportEqual
  | IImportNamed
  | IImportNamespace;

export type IModuleMember =
  | IClassDeclaration
  | IComment
  | IEnumDeclaration
  | IFunctionDeclaration
  | IInterfaceDeclaration
  | INamespaceDeclaration
  | ITypeDeclaration
  | IVariableDeclaration;

export type IComment = IJSDocComment | IMultiLineComment | ISingleLineComment;

export type IDeclaration =
  | IClassDeclaration
  | IEnumDeclaration
  | IFunctionDeclaration
  | IGenericDeclaration
  | IInterfaceDeclaration
  | IParameterDeclaration
  | ITypeDeclaration
  | IVariableDeclaration;

export type IType =
  | IArrayType
  | IConditionalType
  | IConstructorType
  | IFunctionType
  | IGeneralType
  | IInferType
  | IIntersectionType
  | IKeyofType
  | ILiteralType
  | IMappedType
  | INativeType
  | IObjectType
  | ISubType
  | ITupleType
  | ITypeofType
  | IUnionType;
