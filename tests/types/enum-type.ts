import * as dts from '../index';

it('should return correctly with name (string)', () => {
  expect(dts.emit(
    dts.create_enum_type({
      name: 'E',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (EnumDeclaration)', () => {
  expect(dts.emit(
    dts.create_enum_type({
      name: dts.create_enum_declaration({name: 'E'}),
    }),
  )).toMatchSnapshot();
});
