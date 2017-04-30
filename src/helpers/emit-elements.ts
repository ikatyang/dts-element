import {Element} from '../element';
import {Stack} from '../stack';

export const emit_elements = (declarations: Element[], stack: Stack, separator: string = '\n'): string =>
  declarations.map((element: Element) => element.emit(stack)).join(separator);
