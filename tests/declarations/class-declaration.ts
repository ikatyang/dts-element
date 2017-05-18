import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_class_declaration({
      name: 'C',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(dts.emit(
    dts.create_class_declaration({
      name: 'C',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(dts.emit(
    dts.create_class_declaration({
      name: 'C',
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, abstract', () => {
  expect(dts.emit(
    dts.create_class_declaration({
      name: 'C',
      abstract: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, members', () => {
  expect(dts.emit(
    dts.create_class_declaration({
      name: 'C',
      members: [
        dts.create_class_member({
          owned: dts.create_function_declaration({
            name: 'fn',
          }),
        }),
        dts.create_index_signature({
          parameter: dts.create_parameter_declaration({
            name: 'key',
            type: dts.string_type,
          }),
        }),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, abstract, generics, members', () => {
  expect(dts.emit(
    dts.create_class_declaration({
      name: 'C',
      export: true,
      abstract: true,
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
      members: [
        dts.create_class_member({
          owned: dts.create_function_declaration({
            name: 'fn',
          }),
        }),
        dts.create_index_signature({
          parameter: dts.create_parameter_declaration({
            name: 'key',
            type: dts.string_type,
          }),
        }),
      ],
    }),
  )).toMatchSnapshot();
});
