import {Parameter} from '../../elements/parameter';
import {Type} from '../../elements/type';
import {FunctionType} from '../../elements/types/function-type';
import {LiteralType} from '../../elements/types/literal-type';

// tslint:disable-next-line:typedef
export const get_default_select_type_generator = (placeholder: Type | null) =>
  (type: FunctionType): Type =>
    new LiteralType({
      value: type.parameters.parameters
        .map((parameter: Parameter): string => (parameter.parameters.type === placeholder) ? '0' : '1')
        .join(''),
    });
