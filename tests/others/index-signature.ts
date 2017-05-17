import * as dts from '../index';

it('should return correctly with parameter', () => {
  expect(dts.emit(
    dts.create_index_signature({
      parameter: dts.create_parameter_declaration({
        name: 'index',
        type: dts.number_type,
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter, type', () => {
  expect(dts.emit(
    dts.create_index_signature({
      parameter: dts.create_parameter_declaration({
        name: 'index',
        type: dts.number_type,
      }),
      type: dts.number_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter, readonly', () => {
  expect(dts.emit(
    dts.create_index_signature({
      parameter: dts.create_parameter_declaration({
        name: 'index',
        type: dts.number_type,
      }),
      readonly: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with parameter, type, readonly', () => {
  expect(dts.emit(
    dts.create_index_signature({
      parameter: dts.create_parameter_declaration({
        name: 'index',
        type: dts.number_type,
      }),
      type: dts.number_type,
      readonly: true,
    }),
  )).toMatchSnapshot();
});
