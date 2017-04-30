import {Parameter} from '../elements/parameter';
import {Stack} from '../stack';

export const emit_parameters = (paramters: Parameter[], stack: Stack): string =>
  paramters
    .map((parameter: Parameter) => parameter.emit(stack))
    .join(', ');
