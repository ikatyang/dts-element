import {boolean_type, string_type} from '../../constants';
import {emit} from '../../emit';
import {create_object_member} from '../../members/object-member';
import {create_index_signature} from '../../others/index-signature';
import {create_interface_type} from '../../types/interface-type';
import {create_object_type} from '../../types/object-type';
import {create_function_declaration} from '../function-declaration';
import {create_generic_declaration} from '../generic-declaration';
import {create_interface_declaration} from '../interface-declaration';
import {create_parameter_declaration} from '../parameter-declaration';

it('should return correctly with name', () => {
  expect(emit(
    create_interface_declaration({
      name: 'I',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(emit(
    create_interface_declaration({
      name: 'I',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(emit(
    create_interface_declaration({
      name: 'I',
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(emit(
    create_interface_declaration({
      name: 'I',
      type: create_object_type({
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
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, extends', () => {
  expect(emit(
    create_interface_declaration({
      name: 'I',
      extends: [
        create_interface_type({
          name: 'Y',
        }),
        create_interface_type({
          name: create_interface_declaration({
            name: 'Z',
          }),
        }),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, generics, type, extends', () => {
  expect(emit(
    create_interface_declaration({
      name: 'I',
      export: true,
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
      extends: [
        create_interface_type({
          name: 'X',
          generics: [
            boolean_type,
          ],
        }),
      ],
      type: create_object_type({
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
    }),
  )).toMatchSnapshot();
});
