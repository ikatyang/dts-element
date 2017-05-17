import * as dts from '../index';

it('should return correctly with undefined name', () => {
  expect(dts.print(
    dts.create_function_declaration({
      name: undefined,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name', () => {
  expect(dts.print(
    dts.create_function_declaration({
      name: 'fn',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(dts.print(
    dts.create_function_declaration({
      name: 'fn',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(dts.print(
    dts.create_function_declaration({
      name: 'fn',
      type: dts.create_function_type({
        generics: [
          dts.create_generic_declaration({name: 'T'}),
          dts.create_generic_declaration({name: 'U'}),
        ],
        parameters: [
          dts.create_parameter_declaration({name: 'a'}),
          dts.create_parameter_declaration({name: 'b'}),
        ],
        return: dts.string_type,
      }),
    }),
  )).toMatchSnapshot();
});
