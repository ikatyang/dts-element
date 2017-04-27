import {Member} from '../../member';

export class InterfaceMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[InterfaceMember ${this.parameters.owned.emit()}]`;
  }

}
