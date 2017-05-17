import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_variable_declaration({
      name: 'a',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(dts.emit(
    dts.create_variable_declaration({
      name: 'a',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(dts.emit(
    dts.create_variable_declaration({
      name: 'a',
      type: dts.string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, let', () => {
  expect(dts.emit(
    dts.create_variable_declaration({
      name: 'a',
      let: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, type, const', () => {
  expect(dts.emit(
    dts.create_variable_declaration({
      name: 'a',
      const: true,
      export: true,
      type: dts.null_type,
    }),
  )).toMatchSnapshot();
});
