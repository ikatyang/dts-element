import {Type} from '../../type';

export class ArrayType extends Type<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ArrayType ${this.parameters.owned.emit()}]`;
  }

}
