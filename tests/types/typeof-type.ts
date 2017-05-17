import * as dts from '../index';

it('should return correctly with value (string)', () => {
  expect(dts.emit(
    dts.create_typeof_type({
      value: 'a',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with value (declaration)', () => {
  expect(dts.emit(
    dts.create_typeof_type({
      value: dts.create_parameter_declaration({name: 'b'}),
    }),
  )).toMatchSnapshot();
});

it('should throw error with value (declaration.name === undefined)', () => {
  expect(() => dts.emit(
    dts.create_typeof_type({
      value: dts.create_function_declaration({name: undefined}),
    }),
  )).toThrowError();
});
