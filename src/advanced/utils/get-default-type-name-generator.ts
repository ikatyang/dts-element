import {FunctionType} from '../../elements/types/function-type';
import {left_pad} from '../../utils/left-pad';

// tslint:disable-next-line:typedef
export const get_default_type_name_generator = (name: string, type: FunctionType) =>
  (index: number): string =>
    // tslint:disable-next-line:no-magic-numbers
    (`${name}_${left_pad(index.toString(2), type.parameters.parameters.length, '0')}`);
