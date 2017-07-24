import { string_type } from '../../constants';
import { emit } from '../../emit';
import { create_function_type } from '../../types/function-type';
import { create_function_declaration } from '../function-declaration';
import { create_generic_declaration } from '../generic-declaration';
import { create_parameter_declaration } from '../parameter-declaration';

it('should return correctly with undefined name', () => {
  expect(
    emit(
      create_function_declaration({
        name: undefined,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name', () => {
  expect(
    emit(
      create_function_declaration({
        name: 'fn',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(
    emit(
      create_function_declaration({
        name: 'fn',
        export: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(
    emit(
      create_function_declaration({
        name: 'fn',
        type: create_function_type({
          generics: [
            create_generic_declaration({ name: 'T' }),
            create_generic_declaration({ name: 'U' }),
          ],
          parameters: [
            create_parameter_declaration({ name: 'a' }),
            create_parameter_declaration({ name: 'b' }),
          ],
          return: string_type,
        }),
      }),
    ),
  ).toMatchSnapshot();
});
