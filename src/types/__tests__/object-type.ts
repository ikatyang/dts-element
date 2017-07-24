import { string_type } from '../../constants';
import { create_function_declaration } from '../../declarations/function-declaration';
import { create_parameter_declaration } from '../../declarations/parameter-declaration';
import { emit } from '../../emit';
import { create_object_member } from '../../members/object-member';
import { create_index_signature } from '../../others/index-signature';
import { create_object_type } from '../object-type';

it('should return correctly', () => {
  expect(
    emit(
      create_object_type({
        members: [
          create_object_member({
            owned: create_function_declaration({
              name: 'fn',
            }),
          }),
          create_index_signature({
            parameter: create_parameter_declaration({
              name: 'key',
              type: string_type,
            }),
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});
