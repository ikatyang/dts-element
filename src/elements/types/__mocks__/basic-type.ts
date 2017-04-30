import {Type} from '../../type';

export class BasicType extends Type<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[BasicType ${this.parameters.name}]`;
  }

}
