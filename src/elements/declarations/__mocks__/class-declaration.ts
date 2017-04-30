import {Declaration} from '../../declaration';

export class ClassDeclaration extends Declaration<any, any> {

  public get default_parameters(): any {
    return super.default_declaration_parameters;
  }

  public _emit_raw(): string {
    return `[ClassDeclaration ${this.parameters.name}]`;
  }

}
