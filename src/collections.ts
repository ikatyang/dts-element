import {IClassDeclaration} from './declarations/class-declaration';
import {IEnumDeclaration} from './declarations/enum-declaration';
import {IFunctionDeclaration} from './declarations/function-declaration';
import {IGenericDeclaration} from './declarations/generic-declaration';
import {IInterfaceDeclaration} from './declarations/interface-declaration';
import {IModuleDeclaration} from './declarations/module-declaration';
import {INamespaceDeclaration} from './declarations/namespace-declaration';
import {IParameterDeclaration} from './declarations/parameter-declaration';
import {ITypeDeclaration} from './declarations/type-declaration';
import {IVariableDeclaration} from './declarations/variable-declaration';
import {ITripleSlashReference} from './others/triple-slash-reference';
import {IArrayType} from './types/array-type';
import {IBasicType} from './types/basic-type';
import {IClassType} from './types/class-type';
import {IConstructorType} from './types/constructor-type';
import {IEnumType} from './types/enum-type';
import {IFunctionType} from './types/function-type';
import {IGenericType} from './types/generic-type';
import {IInterfaceType} from './types/interface-type';
import {IIntersectionType} from './types/intersection-type';
import {IKeyofType} from './types/keyof-type';
import {ILiteralType} from './types/literal-type';
import {INativeType} from './types/native-type';
import {IObjectType} from './types/object-type';
import {ITupleType} from './types/tuple-type';
import {ITypedType} from './types/typed-type';
import {ITypeofType} from './types/typeof-type';
import {IUnionType} from './types/union-type';

export type ITopLevelMember =
  | IModuleMember
  | IModuleDeclaration
  | ITripleSlashReference
;

export type IModuleMember =
  | IClassDeclaration
  | IEnumDeclaration
  | IFunctionDeclaration
  | IInterfaceDeclaration
  | INamespaceDeclaration
  | ITypeDeclaration
  | IVariableDeclaration
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
  | IBasicType
  | IClassType
  | IConstructorType
  | IEnumType
  | IFunctionType
  | IGenericType
  | IInterfaceType
  | IIntersectionType
  | IKeyofType
  | ILiteralType
  | INativeType
  | IObjectType
  | ITupleType
  | ITypedType
  | ITypeofType
  | IUnionType
;
