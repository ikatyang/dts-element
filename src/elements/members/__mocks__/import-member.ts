import {Member} from '../../member';

export class ImportMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ImportMember ${this.parameters.owned.parameters.name}]`;
  }

}
