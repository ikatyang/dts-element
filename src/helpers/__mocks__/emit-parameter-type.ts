// tslint:disable-next-line no-unused-variable
import {AnyType, Type} from '../../elements/type';

export const emit_parameter_type = (type: AnyType): string => `[emit-parameter-type ${type.emit()}]`;
