import {Type} from '../../type';

export class ClassType extends Type<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ClassType ${this.parameters.class}]`;
  }

}
