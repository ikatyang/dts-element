// tslint:disable-next-line no-unused-variable
import {Container} from '../collections';
import {AnyElement, Element} from '../element';
import {Parameter} from '../elements/parameter';

export const emit_parameters = (paramters: Parameter[], container: Container): string =>
  paramters
    .map((parameter: Parameter) => parameter._emit(container))
    .join(', ');
