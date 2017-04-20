import { Element } from './element';

export type IDeclaration = IDeclarationRequiredParameters & IDeclarationOptionalParameters;

export type IDeclarationParameters = IDeclarationRequiredParameters & Partial<IDeclarationOptionalParameters>;

export interface IDeclarationRequiredParameters {
  name: string;
}

export interface IDeclarationOptionalParameters {
  jsdoc: string | null;
  is_abstract: boolean;
  is_static: boolean;
  is_readonly: boolean;
  access_modifier: 'public' | 'protected' | 'private' | null;
}

export abstract class Declaration extends Element<IDeclaration> {

  constructor(parameters: IDeclarationParameters) {
    const defaults: IDeclarationOptionalParameters = {
      jsdoc: null,
      is_abstract: false,
      is_static: false,
      is_readonly: false,
      access_modifier: null,
    };
    super({ ...defaults, ...parameters });
  }

}
