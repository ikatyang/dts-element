import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_type_declaration({
      name: 'X',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(dts.emit(
    dts.create_type_declaration({
      name: 'X',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(dts.emit(
    dts.create_type_declaration({
      name: 'X',
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(dts.emit(
    dts.create_type_declaration({
      name: 'X',
      type: dts.string_type,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, generics, type', () => {
  expect(dts.emit(
    dts.create_type_declaration({
      name: 'X',
      export: true,
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
      type: dts.string_type,
    }),
  )).toMatchSnapshot();
});
