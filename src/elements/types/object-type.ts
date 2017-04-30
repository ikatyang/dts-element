import {emit_members} from '../../helpers/emit-members';
import {Stack} from '../../stack';
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

  public _emit(stack: Stack): string {
    const {members} = this.parameters;
    return emit_members(members, stack);
  }

}
