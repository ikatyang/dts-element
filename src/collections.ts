import {Element} from './element';
import {Declaration} from './elements/declaration';
import {FunctionDeclaration} from './elements/declarations/function';
import {VariableDeclaration} from './elements/declarations/variable';
import {IndexSignature} from './elements/index-signature';
import {Reference} from './elements/reference';

export type Container = Element | null;

export type RootElement = Reference | Declaration;
export type MemberOwned = IndexSignature | VariableDeclaration | FunctionDeclaration;

export type Accessor = 'private' | 'protected' | 'public' | null;
export type ParameterFlag = null | 'optional' | 'rest';
export type VariableKind = 'var' | 'let' | 'const';
export type IndexSignatureKind = 'number' | 'string';
export type LiteralValue = boolean | number | string;
