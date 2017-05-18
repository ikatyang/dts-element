import * as dts from '../index';

it('should return correctly with parameter (ParameterDeclaration), type', () => {
  expect(dts.emit(
    dts.create_type_predicate({
      parameter: dts.create_parameter_declaration({
        name: 'key',
        type: dts.number_type,
      }),
      type: dts.string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter (this_type), type', () => {
  expect(dts.emit(
    dts.create_type_predicate({
      parameter: dts.this_type,
      type: dts.number_type,
    }),
  )).toMatchSnapshot();
});

it('should throw error with parameter (not ParameterDeclaration or this_type)', () => {
  expect(() => dts.emit(
    dts.create_type_predicate({
      parameter: dts.string_type,
      type: dts.number_type,
    }),
  )).toThrowError();
});
