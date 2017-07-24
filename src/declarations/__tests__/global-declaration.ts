import { emit } from '../../emit';
import { create_function_declaration } from '../function-declaration';
import { create_global_declaration } from '../global-declaration';
import { create_variable_declaration } from '../variable-declaration';

it('should return correctly', () => {
  expect(emit(create_global_declaration())).toMatchSnapshot();
});

it('should return correctly with members', () => {
  expect(
    emit(
      create_global_declaration({
        members: [
          create_variable_declaration({
            name: 'a',
          }),
          create_function_declaration({
            name: 'b',
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});
