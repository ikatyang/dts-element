import {Container} from '../../collections';
import {emit_object} from '../../helpers/emit-object';
import {ObjectMember} from '../members/object';
import {Type} from '../type';

// tslint:disable-next-line no-empty-interface
export interface IObjectTypeRequiredParameters {}

export interface IObjectTypeOptionalParameters {
  children: ObjectMember[];
}

export class ObjectType extends Type<IObjectTypeRequiredParameters, IObjectTypeOptionalParameters> {

  public get default_parameters(): IObjectTypeOptionalParameters {
    return {
      children: [],
    };
  }

  public _emit(_container: Container): string {
    const {children} = this.parameters;
    return emit_object(children, this);
  }

}
