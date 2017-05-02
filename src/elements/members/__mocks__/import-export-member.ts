import {Member} from '../../member';

export class ImportExportMember extends Member<any, any> {

  public get default_parameters(): any {
    return {};
  }

  public _emit(): string {
    return `[ImportExportMember ${this.parameters.owned.parameters.name}]`;
  }

}
