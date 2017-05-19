import {create_function_declaration} from '../../declarations/function-declaration';
import {create_parameter_declaration} from '../../declarations/parameter-declaration';
import {emit} from '../../emit';
import {create_typeof_type} from '../typeof-type';

it('should return correctly with value (string)', () => {
  expect(emit(
    create_typeof_type({
      value: 'a',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with value (declaration)', () => {
  expect(emit(
    create_typeof_type({
      value: create_parameter_declaration({name: 'b'}),
    }),
  )).toMatchSnapshot();
});

it('should throw error with value (declaration.name === undefined)', () => {
  expect(() => emit(
    create_typeof_type({
      value: create_function_declaration({name: undefined}),
    }),
  )).toThrowError();
});
