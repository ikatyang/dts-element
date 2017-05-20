import {create_function_declaration} from '../../declarations/function-declaration';
import {create_parameter_declaration} from '../../declarations/parameter-declaration';
import {emit} from '../../emit';
import {create_typeof_type} from '../typeof-type';

it('should return correctly with value', () => {
  expect(emit(
    create_typeof_type({
      value: 'a',
    }),
  )).toMatchSnapshot();
});
