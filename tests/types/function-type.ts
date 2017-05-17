import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.print(
    dts.create_function_type(),
  )).toMatchSnapshot();
});

it('should return correctly with generics', () => {
  expect(dts.print(
    dts.create_function_type({
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameters', () => {
  expect(dts.print(
    dts.create_function_type({
      parameters: [
        dts.create_parameter_declaration({name: 'a'}),
        dts.create_parameter_declaration({name: 'b'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with return', () => {
  expect(dts.print(
    dts.create_function_type({
      return: dts.string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with generics, parameters, return', () => {
  expect(dts.print(
    dts.create_function_type({
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
  )).toMatchSnapshot();
});
