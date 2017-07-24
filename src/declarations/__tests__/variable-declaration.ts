import { null_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_variable_declaration } from '../variable-declaration';

it('should return correctly with name', () => {
  expect(
    emit(
      create_variable_declaration({
        name: 'a',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(
    emit(
      create_variable_declaration({
        name: 'a',
        export: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(
    emit(
      create_variable_declaration({
        name: 'a',
        type: string_type,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, let', () => {
  expect(
    emit(
      create_variable_declaration({
        name: 'a',
        let: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with name, export, type, const', () => {
  expect(
    emit(
      create_variable_declaration({
        name: 'a',
        const: true,
        export: true,
        type: null_type,
      }),
    ),
  ).toMatchSnapshot();
});
