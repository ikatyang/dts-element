import {Container} from '../collections';
import {Element} from '../element';
import {emit_elements} from '../helpers/emit-elements';
import {trim_every_line} from '../helpers/trim-every-line';
import {Declaration} from './declaration';
import {Reference} from './reference';

export interface IDocumentRequiredParameters {
  children: (Reference | Declaration)[];
}

// tslint:disable-next-line no-empty-interface
export interface IDocumentOptionalParameters {}

export class Document extends Element<IDocumentRequiredParameters, IDocumentOptionalParameters> {

  public get default_parameters(): IDocumentOptionalParameters {
    return {};
  }

  public _emit(_container: Container): string {
    const {children} = this.parameters;
    const content = emit_elements(children, this);
    return trim_every_line(content);
  }

}
