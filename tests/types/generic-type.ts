import * as dts from '../index';

it('should return correctly with name (string)', () => {
  expect(dts.emit(
    dts.create_generic_type({
      name: 'T',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name (GenericDeclaration)', () => {
  expect(dts.emit(
    dts.create_generic_type({
      name: dts.create_generic_declaration({name: 'T'}),
    }),
  )).toMatchSnapshot();
});
