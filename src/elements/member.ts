import {MemberOwned} from '../collections';
import {Element} from '../element';

export interface IMemberRequiredParameters {
  owned: MemberOwned;
}

// tslint:disable-next-line no-empty-interface
export interface IMemberOptionalParameters {}

export abstract class Member
    <RequiredParameters extends object = any, OptionalParameters extends object = any> extends Element
    <IMemberRequiredParameters & RequiredParameters, IMemberOptionalParameters & OptionalParameters> {}
