import {MemberOwned} from '../collections';
import {Element} from '../element';

export type AnyMember = Member<any, any>;

export interface IMemberRequiredParameters {
  owned: MemberOwned;
}

// tslint:disable-next-line no-empty-interface
export interface IMemberOptionalParameters {}

// tslint:disable-next-line no-unused-variable
export abstract class Member<RequiredParameters extends {}, OptionalParameters extends {}> extends Element
    <IMemberRequiredParameters & RequiredParameters, IMemberOptionalParameters & OptionalParameters> {}
