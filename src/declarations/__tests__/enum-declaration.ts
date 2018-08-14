import { any_type } from '../../constants';
import { emit } from '../../emit';
import { create_literal_type } from '../../types/literal-type';
import {
  create_enum_declaration,
  is_enum_declaration,
} from '../enum-declaration';
import { create_variable_declaration } from '../variable-declaration';

it('should return correctly with name', () => {
  expect(
    emit(
      create_enum_declaration({
        name: 'E',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, const', () => {
  expect(
    emit(
      create_enum_declaration({
        name: 'E',
        const: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(
    emit(
      create_enum_declaration({
        name: 'E',
        export: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, members', () => {
  expect(
    emit(
      create_enum_declaration({
        name: 'E',
        members: [
          create_variable_declaration({
            name: 'a',
            type: create_literal_type({
              value: 5,
            }),
          }),
          create_variable_declaration({
            name: 'b',
          }),
          create_variable_declaration({
            name: 'c',
            type: create_literal_type({
              value: 'hello',
            }),
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, export, members', () => {
  expect(
    emit(
      create_enum_declaration({
        name: 'E',
        export: true,
        members: [
          create_variable_declaration({
            name: 'a',
            type: create_literal_type({
              value: 5,
            }),
          }),
          create_variable_declaration({
            name: 'b',
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with numerical member name', () => {
  expect(
    emit(
      create_enum_declaration({
        name: 'E',
        members: [
          create_variable_declaration({
            name: 0,
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});

it('should throw error with members (VariableDeclaration with type (not undefined or LiteralType))', () => {
  expect(() =>
    emit(
      create_enum_declaration({
        name: 'E',
        members: [
          create_variable_declaration({
            name: 'a',
            type: any_type,
          }),
        ],
      }),
    ),
  ).toThrowError();
});

describe('is_enum_declaration', () => {
  it('should return correctly', () => {
    const element = create_enum_declaration({
      name: 'E',
    });
    expect(is_enum_declaration(element)).toBe(true);
  });
});
