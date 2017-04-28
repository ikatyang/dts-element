// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
// tslint:disable-next-line no-unused-variable
import {AnyType, Type} from '../elements/type';
import {ArrayType} from '../elements/types/array';

export const emit_parameter_type =
  (type: AnyType, flag: null | 'rest' | 'optional', container: AnyElement | null): string =>
    (flag === 'rest')
      ? new ArrayType({owned: type})._emit(container)
      : type._emit(container);
