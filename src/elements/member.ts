import {Element} from '../element';
import {FunctionDeclaration} from './declarations/function';
import {VariableDeclaration} from './declarations/variable';
import {IndexSignature} from './index-signature';

export type MemberOwned = IndexSignature | VariableDeclaration | FunctionDeclaration;

export interface IMemberRequiredParameters {
  owned: MemberOwned;
}

// tslint:disable-next-line no-empty-interface
export interface IMemberOptionalParameters {}

export abstract class Member
    <RequiredParameters extends object = any, OptionalParameters extends object = any> extends Element
    <IMemberRequiredParameters & RequiredParameters, IMemberOptionalParameters & OptionalParameters> {}
