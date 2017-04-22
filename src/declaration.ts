import { Element } from './element';

export interface IDeclarationRequiredParameters {
  name: string;
}

export interface IDeclarationOptionalParameters {
  jsdoc: string | null;
}

export abstract class Declaration<RequiredParameters extends {}, OptionalParameters extends {}> extends Element
    <IDeclarationRequiredParameters & RequiredParameters, IDeclarationOptionalParameters & OptionalParameters> {

  protected _get_default_parameters(): IDeclarationOptionalParameters {
    return {
      jsdoc: null,
    };
  }

  protected emit_jsdoc(): string {
    if (this.parameters.jsdoc === null) {
      return '';
    }
    const content = this.parameters.jsdoc
      .split('\n')
      .map((line: string) => ` * ${line}`)
      .join('\n');
    return `/**\n${content}\n */\n`;
  }

}
