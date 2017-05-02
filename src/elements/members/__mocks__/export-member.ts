import {Member} from '../../member';

export class ExportMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ExportMember ${this.parameters.owned.parameters.name}]`;
  }

}
