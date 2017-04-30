import {Element} from '../element';
import {Constructor} from './constructor';
import {FunctionDeclaration} from './declarations/function-declaration';
import {VariableDeclaration} from './declarations/variable-declaration';
import {IndexSignature} from './index-signature';

export type MemberOwned = Constructor | IndexSignature | VariableDeclaration | FunctionDeclaration;

export interface IMemberRequiredParameters {
  owned: MemberOwned;
}

// tslint:disable-next-line no-empty-interface
export interface IMemberOptionalParameters {}

export abstract class Member
    <RequiredParameters extends object = any, OptionalParameters extends object = any> extends Element
    <IMemberRequiredParameters & RequiredParameters, IMemberOptionalParameters & OptionalParameters> {}
