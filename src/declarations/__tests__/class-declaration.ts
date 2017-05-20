import {string_type, symbol_type} from '../../constants';
import {emit} from '../../emit';
import {create_class_member} from '../../members/class-member';
import {create_index_signature} from '../../others/index-signature';
import {create_class_type} from '../../types/class-type';
import {create_class_declaration} from '../class-declaration';
import {create_function_declaration} from '../function-declaration';
import {create_generic_declaration} from '../generic-declaration';
import {create_parameter_declaration} from '../parameter-declaration';

it('should return correctly with name', () => {
  expect(emit(
    create_class_declaration({
      name: 'C',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(emit(
    create_class_declaration({
      name: 'C',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(emit(
    create_class_declaration({
      name: 'C',
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, abstract', () => {
  expect(emit(
    create_class_declaration({
      name: 'C',
      abstract: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, members', () => {
  expect(emit(
    create_class_declaration({
      name: 'C',
      members: [
        create_class_member({
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
  )).toMatchSnapshot();
});

it('should return correctly with name, extends', () => {
  expect(emit(
    create_class_declaration({
      name: 'C',
      extends: create_class_type({
        name: 'X',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, abstract, generics, members, extends', () => {
  expect(emit(
    create_class_declaration({
      name: 'C',
      export: true,
      abstract: true,
      generics: [
        create_generic_declaration({name: 'T'}),
        create_generic_declaration({name: 'U'}),
      ],
      extends: create_class_type({
        name: 'Z',
        generics: [
          string_type,
          symbol_type,
        ],
      }),
      members: [
        create_class_member({
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
  )).toMatchSnapshot();
});
