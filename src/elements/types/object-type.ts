import {Container} from '../../collections';
import {emit_members} from '../../helpers/emit-members';
import {ObjectMember} from '../members/object-member';
import {Type} from '../type';

export interface IObjectTypeRequiredParameters {
  members: ObjectMember[];
}

// tslint:disable-next-line no-empty-interface
export interface IObjectTypeOptionalParameters {}

export class ObjectType extends Type<IObjectTypeRequiredParameters, IObjectTypeOptionalParameters> {

  public get default_parameters(): IObjectTypeOptionalParameters {
    return {};
  }

  public _emit(_container: Container): string {
    const {members} = this.parameters;
    return emit_members(members, this);
  }

}
