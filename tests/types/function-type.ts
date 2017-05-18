import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_function_type(),
  )).toMatchSnapshot();
});

it('should return correctly with generics', () => {
  expect(dts.emit(
    dts.create_function_type({
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameters', () => {
  expect(dts.emit(
    dts.create_function_type({
      parameters: [
        dts.create_parameter_declaration({name: 'a'}),
        dts.create_parameter_declaration({name: 'b'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with return', () => {
  expect(dts.emit(
    dts.create_function_type({
      return: dts.string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameters, return (TypePredicate)', () => {
  const parameter = dts.create_parameter_declaration({
    name: 'a',
  });
  expect(dts.emit(
    dts.create_function_type({
      parameters: [
        parameter,
      ],
      return: dts.create_type_predicate({
        parameter,
        type: dts.string_type,
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with generics, parameters, return', () => {
  expect(dts.emit(
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
