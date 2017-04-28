import {Type} from '../../elements/type';

export const emit_parameter_type = (type: Type): string => `[emit-parameter-type ${type.emit()}]`;
