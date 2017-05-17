import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.print(
    dts.create_generic_declaration({
      name: 'T',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, extends, default', () => {
  expect(dts.print(
    dts.create_generic_declaration({
      name: 'T',
      extends: dts.string_type,
      defalut: dts.any_type,
    }),
  )).toMatchSnapshot();
});
