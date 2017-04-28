import {Container} from '../../collections';
import {emit_elements} from '../../helpers/emit-elements';
import {indent_every_line} from '../../helpers/indent-every-line';
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
    const content = emit_elements(children, this);
    return `{\n${indent_every_line(content)}\n}`;
  }

}
