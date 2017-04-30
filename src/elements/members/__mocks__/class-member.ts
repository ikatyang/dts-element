import {Member} from '../../member';

export class ClassMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ClassMember ${this.parameters.owned.emit()}]`;
  }

}
