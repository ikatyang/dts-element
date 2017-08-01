import { number_type } from '../../constants';
import { create_parameter_declaration } from '../../declarations/parameter-declaration';
import { emit } from '../../emit';
import { create_index_signature, is_index_signature } from '../index-signature';

it('should return correctly with parameter', () => {
  expect(
    emit(
      create_index_signature({
        parameter: create_parameter_declaration({
          name: 'index',
          type: number_type,
        }),
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with parameter, type', () => {
  expect(
    emit(
      create_index_signature({
        parameter: create_parameter_declaration({
          name: 'index',
          type: number_type,
        }),
        type: number_type,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with parameter, readonly', () => {
  expect(
    emit(
      create_index_signature({
        parameter: create_parameter_declaration({
          name: 'index',
          type: number_type,
        }),
        readonly: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with parameter, type, readonly', () => {
  expect(
    emit(
      create_index_signature({
        parameter: create_parameter_declaration({
          name: 'index',
          type: number_type,
        }),
        type: number_type,
        readonly: true,
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_index_signature', () => {
  it('should return correctly', () => {
    const element = create_index_signature({
      parameter: create_parameter_declaration({
        name: 'index',
        type: number_type,
      }),
    });
    expect(is_index_signature(element)).toBe(true);
  });
});
