import {
  any_type,
  create_function_declaration,
  create_function_type,
  create_generic_declaration,
  create_parameter_declaration,
  print,
  string_type,
} from '../index';

it('should return correctly with undefined name', () => {
  expect(print(
    create_function_declaration({
      name: undefined,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name', () => {
  expect(print(
    create_function_declaration({
      name: 'fn',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(print(
    create_function_declaration({
      name: 'fn',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(print(
    create_function_declaration({
      name: 'fn',
      type: create_function_type({
        generics: [
          create_generic_declaration({name: 'T'}),
          create_generic_declaration({name: 'U'}),
        ],
        parameters: [
          create_parameter_declaration({name: 'a'}),
          create_parameter_declaration({name: 'b'}),
        ],
        return: string_type,
      }),
    }),
  )).toMatchSnapshot();
});
