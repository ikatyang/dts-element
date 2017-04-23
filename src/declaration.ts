import {Element} from './element';
import {line_map} from './helpers/line-map';

export interface IDeclarationRequiredParameters {
  name: string;
}

export interface IDeclarationOptionalParameters {
  jsdoc: string;
}

export type AnyDeclaration = Declaration<any, any>;

export abstract class Declaration<RequiredParameters extends {}, OptionalParameters extends {}> extends Element
    <IDeclarationRequiredParameters & RequiredParameters, IDeclarationOptionalParameters & OptionalParameters> {

  public get default_declaration_parameters(): IDeclarationOptionalParameters {
    return {
      jsdoc: '',
    };
  }

  public emit_jsdoc(): string {
    const {jsdoc} = this.parameters;
    const content = line_map(jsdoc, (line: string) => ` * ${line}`);
    return (content.length === 0)
      ? content
      : `/**\n${content}\n */\n`;
  }

}
