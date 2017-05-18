import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_module_declaration({
      name: 'M',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, children', () => {
  expect(dts.emit(
    dts.create_module_declaration({
      name: 'M',
      children: [
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
