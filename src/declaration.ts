import { Element } from './element';
import { line_map } from './helpers/line-map';

export interface IDeclarationRequiredParameters {
  name: string;
}

export interface IDeclarationOptionalParameters {
  jsdoc: string | null;
}

export abstract class Declaration<RequiredParameters extends {}, OptionalParameters extends {}> extends Element
    <IDeclarationRequiredParameters & RequiredParameters, IDeclarationOptionalParameters & OptionalParameters> {

  // istanbul ignore next
  public get default_declaration_parameters(): IDeclarationOptionalParameters {
    return {
      jsdoc: null,
    };
  }

  public emit_jsdoc(): string {
    const { jsdoc } = this.parameters;
    if (jsdoc === null) {
      return '';
    }
    const content = line_map(jsdoc, (line: string) => ` * ${line}`);
    return `/**\n${content}\n */\n`;
  }

}
