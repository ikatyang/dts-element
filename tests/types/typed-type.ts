import * as dts from '../index';

it('should return correctly with name (string)', () => {
  expect(dts.emit(
    dts.create_typed_type({
      name: 'Something',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (TypeDeclaration)', () => {
  expect(dts.emit(
    dts.create_typed_type({
      name: dts.create_type_declaration({
        name: 'Something',
      }),
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(dts.emit(
    dts.create_typed_type({
      name: 'Something',
      generics: [
        dts.any_type,
        dts.string_type,
      ],
    }),
  )).toMatchSnapshot();
});
