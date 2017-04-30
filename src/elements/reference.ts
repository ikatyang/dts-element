import {Element} from '../element';
import {Stack} from '../stack';

export interface IReferenceRequiredParameters {
  kind: 'path' | 'types';
  content: string;
}

// tslint:disable-next-line no-empty-interface
export interface IReferenceOptionalParameters {}

export class Reference extends Element<IReferenceRequiredParameters, IReferenceOptionalParameters> {

  public get default_parameters(): IReferenceOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {kind, content} = this.parameters;
    return `/// <reference ${kind}="${content}" />`;
  }

}
