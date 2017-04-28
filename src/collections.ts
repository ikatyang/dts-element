import {AnyElement} from './element';
import {AnyDeclaration} from './elements/declaration';
import {FunctionDeclaration} from './elements/declarations/function';
import {VariableDeclaration} from './elements/declarations/variable';
import {IndexSignature} from './elements/index-signature';
import {Reference} from './elements/reference';

export type Container = AnyElement | null;

export type RootElement = Reference | AnyDeclaration;
export type MemberOwned = IndexSignature | VariableDeclaration | FunctionDeclaration;

export type Accessor = 'private' | 'protected' | 'public' | null;
export type ParameterFlag = null | 'optional' | 'rest';
export type VariableKind = 'var' | 'let' | 'const';
