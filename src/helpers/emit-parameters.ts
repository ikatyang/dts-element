import {Container} from '../collections';
import {Parameter} from '../elements/parameter';

export const emit_parameters = (paramters: Parameter[], container: Container): string =>
  paramters
    .map((parameter: Parameter) => parameter._emit(container))
    .join(', ');
