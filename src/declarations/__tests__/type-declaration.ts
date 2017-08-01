import { string_type } from '../../constants';
import { emit } from '../../emit';
import { create_generic_declaration } from '../generic-declaration';
import {
  create_type_declaration,
  is_type_declaration,
} from '../type-declaration';

it('should return correctly with name', () => {
  expect(
    emit(
      create_type_declaration({
        name: 'X',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(
    emit(
      create_type_declaration({
        name: 'X',
        export: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(
    emit(
      create_type_declaration({
        name: 'X',
        generics: [
          create_generic_declaration({ name: 'T' }),
          create_generic_declaration({ name: 'U' }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(
    emit(
      create_type_declaration({
        name: 'X',
        type: string_type,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, export, generics, type', () => {
  expect(
    emit(
      create_type_declaration({
        name: 'X',
        export: true,
        generics: [
          create_generic_declaration({ name: 'T' }),
          create_generic_declaration({ name: 'U' }),
        ],
        type: string_type,
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_type_declaration', () => {
  it('should return correctly', () => {
    const element = create_type_declaration({
      name: 'X',
    });
    expect(is_type_declaration(element)).toBe(true);
  });
});
