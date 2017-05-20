import {string_type} from '../../constants';
import {create_generic_declaration} from '../../declarations/generic-declaration';
import {emit} from '../../emit';
import {create_general_type} from '../general-type';
import {create_generic_type} from '../generic-type';
import {create_keyof_type} from '../keyof-type';
import {create_mapped_type} from '../mapped-type';
import {create_sub_type} from '../sub-type';

it('should return correctly with parameter', () => {
  expect(emit(
    create_mapped_type({
      parameter: create_generic_declaration({
        name: 'T',
        extends: create_keyof_type({
          type: create_general_type({
            name: 'X',
          }),
        }),
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter, optional', () => {
  expect(emit(
    create_mapped_type({
      parameter: create_generic_declaration({
        name: 'T',
        extends: create_keyof_type({
          type: create_general_type({
            name: 'X',
          }),
        }),
      }),
      optional: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter, readonly', () => {
  expect(emit(
    create_mapped_type({
      parameter: create_generic_declaration({
        name: 'T',
        extends: create_keyof_type({
          type: create_general_type({
            name: 'X',
          }),
        }),
      }),
      readonly: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter, type', () => {
  expect(emit(
    create_mapped_type({
      parameter: create_generic_declaration({
        name: 'T',
        extends: create_keyof_type({
          type: create_general_type({
            name: 'X',
          }),
        }),
      }),
      type: string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter, optional, readonly, type', () => {
  const in_type = create_general_type({
    name: 'X',
  });
  const parameter = create_generic_declaration({
    name: 'T',
    extends: create_keyof_type({
      type: in_type,
    }),
  });
  expect(emit(
    create_mapped_type({
      parameter,
      optional: true,
      readonly: true,
      type: create_sub_type({
        types: [
          in_type,
          create_generic_type({
            name: parameter.name,
          }),
        ],
      }),
    }),
  )).toMatchSnapshot();
});

it('should throw error with parameter.extends = undefined', () => {
  expect(() => emit(
    create_mapped_type({
      parameter: create_generic_declaration({
        name: 'T',
      }),
    }),
  )).toThrowError();
});
