import {ReferenceKinds, REFERENCE_KIND_MAP} from '../constants';
import {Element} from '../element';
import {Stack} from '../stack';

export interface IReferenceRequiredParameters {
  kind: ReferenceKinds;
  content: string;
}

// tslint:disable-next-line no-empty-interface
export interface IReferenceOptionalParameters {}

export class Reference extends Element<IReferenceRequiredParameters, IReferenceOptionalParameters> {

  private _instance_of_reference: true;

  public get default_parameters(): IReferenceOptionalParameters {
    return {};
  }

  public _emit(_stack: Stack): string {
    const {kind, content} = this.parameters;
    return `/// <reference ${REFERENCE_KIND_MAP[kind]}="${content}" />`;
  }

}
