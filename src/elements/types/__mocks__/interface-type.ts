import {Type} from '../../type';

export class InterfaceType extends Type<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[InterfaceType ${this.parameters.name}]`;
  }

}
