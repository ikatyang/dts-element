import {Element} from '../element';
import {AnyElement} from '../element';
import {trim_every_line} from '../helpers/trim-every-line';
import {RootElement} from '../sets';

export interface IDocumentRequiredParameters {
  children: RootElement[];
}

// tslint:disable-next-line no-empty-interface
export interface IDocumentOptionalParameters {}

export class Document extends Element<IDocumentRequiredParameters, IDocumentOptionalParameters> {

  public get default_parameters(): IDocumentOptionalParameters {
    return {};
  }

  public _emit(_container: AnyElement): string {
    const {children} = this.parameters;
    const content = children.map((element: RootElement) => element._emit(this)).join('\n');
    return trim_every_line(content);
  }

}
