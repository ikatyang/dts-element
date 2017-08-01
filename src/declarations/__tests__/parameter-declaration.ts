import { string_type } from '../../constants';
import { emit } from '../../emit';
import {
  create_parameter_declaration,
  is_parameter_declaration,
} from '../parameter-declaration';

it('should return correctly with name', () => {
  expect(
    emit(
      create_parameter_declaration({
        name: 'a',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, rest', () => {
  expect(
    emit(
      create_parameter_declaration({
        name: 'a',
        rest: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, type, optional', () => {
  expect(
    emit(
      create_parameter_declaration({
        name: 'a',
        type: string_type,
        optional: true,
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_parameter_declaration', () => {
  it('should return correctly', () => {
    const element = create_parameter_declaration({
      name: 'a',
    });
    expect(is_parameter_declaration(element)).toBe(true);
  });
});
