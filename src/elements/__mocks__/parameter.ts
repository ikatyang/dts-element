import {Element} from '../../element';

export class Parameter extends Element<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[Parameter ${this.parameters.name}]`;
  }

}
