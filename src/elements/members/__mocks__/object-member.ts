import {Member} from '../../member';

export class ObjectMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ObjectMember ${this.parameters.owned.emit()}]`;
  }

}
