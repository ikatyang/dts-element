import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_namespace_declaration({
      name: 'N',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(dts.emit(
    dts.create_namespace_declaration({
      name: 'N',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, children', () => {
  expect(dts.emit(
    dts.create_namespace_declaration({
      name: 'N',
      members: [
        dts.create_variable_declaration({
          name: 'a',
        }),
        dts.create_function_declaration({
          name: 'b',
        }),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, children', () => {
  expect(dts.emit(
    dts.create_namespace_declaration({
      name: 'N',
      export: true,
      members: [
        dts.create_variable_declaration({
          name: 'a',
        }),
        dts.create_function_declaration({
          name: 'b',
        }),
      ],
    }),
  )).toMatchSnapshot();
});
