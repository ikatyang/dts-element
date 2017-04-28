import {Container} from '../collections';
// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';

export const emit_elements = (declarations: AnyElement[], container: Container): string =>
  declarations.map((element: AnyElement) => element._emit(container)).join('\n');
