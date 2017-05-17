import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.print(
    dts.create_parameter_declaration({
      name: 'a',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, rest', () => {
  expect(dts.print(
    dts.create_parameter_declaration({
      name: 'a',
      rest: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type, optional', () => {
  expect(dts.print(
    dts.create_parameter_declaration({
      name: 'a',
      type: dts.string_type,
      optional: true,
    }),
  )).toMatchSnapshot();
});
