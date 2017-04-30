import {Type} from '../../type';

export class GenericType extends Type<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[GenericType ${this.parameters.name}]`;
  }

}
