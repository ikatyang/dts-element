import {Element} from './element';
import {RootElement} from './sets';
import {trim_every_line} from './helpers/trim-every-line';
import {AnyElement} from './element';

export interface IDocumentRequiredParameters {
  elements: RootElement[];
}

// tslint:disable-next-line no-empty-interface
export interface IDocumentOptionalParameters {}

export class Document extends Element<IDocumentRequiredParameters, IDocumentOptionalParameters> {

  public get default_parameters(): IDocumentOptionalParameters {
    return {};
  }

  public _emit(_container: AnyElement): string {
    const {elements} = this.parameters;
    const content = elements.map((element: RootElement) => element.emit()).join('\n');
    return trim_every_line(content);
  }

}
