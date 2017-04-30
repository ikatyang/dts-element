import {Element} from '../../element';

export class GenericDefinition extends Element<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[GenericDefinition ${this.parameters.owned.parameters.name}]`;
  }

}
