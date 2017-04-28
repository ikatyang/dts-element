import {Container} from '../collections';
import {Element} from '../element';

export const emit_elements = (declarations: Element[], container: Container): string =>
  declarations.map((element: Element) => element._emit(container)).join('\n');
