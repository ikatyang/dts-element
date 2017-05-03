import {Member} from '../../member';

export class ExportFromMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ExportFromMember ${this.parameters.owned}]`;
  }

}
