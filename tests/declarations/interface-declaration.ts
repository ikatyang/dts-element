import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_interface_declaration({
      name: 'I',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(dts.emit(
    dts.create_interface_declaration({
      name: 'I',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, generics', () => {
  expect(dts.emit(
    dts.create_interface_declaration({
      name: 'I',
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, type', () => {
  expect(dts.emit(
    dts.create_interface_declaration({
      name: 'I',
      type: dts.create_object_type({
        members: [
          dts.create_object_member({
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
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, generics, type', () => {
  expect(dts.emit(
    dts.create_interface_declaration({
      name: 'I',
      export: true,
      generics: [
        dts.create_generic_declaration({name: 'T'}),
        dts.create_generic_declaration({name: 'U'}),
      ],
      type: dts.create_object_type({
        members: [
          dts.create_object_member({
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
    }),
  )).toMatchSnapshot();
});
