import {Declaration} from '../../declaration';

export class VariableDeclaration extends Declaration<any, any> {

  public get default_parameters(): any {
    return super.default_declaration_parameters;
  }

  public _emit_raw(): string {
    return `[VariableDeclaration ${this.parameters.name}]`;
  }

}
