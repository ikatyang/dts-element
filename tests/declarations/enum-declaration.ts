import * as dts from '../index';

it('should return correctly with name', () => {
  expect(dts.emit(
    dts.create_enum_declaration({
      name: 'E',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export', () => {
  expect(dts.emit(
    dts.create_enum_declaration({
      name: 'E',
      export: true,
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, members', () => {
  expect(dts.emit(
    dts.create_enum_declaration({
      name: 'E',
      members: [
        dts.create_variable_declaration({
          name: 'a',
          type: dts.create_literal_type({
            value: 5,
          }),
        }),
        dts.create_variable_declaration({
          name: 'b',
        }),
        dts.create_variable_declaration({
          name: 'c',
          type: dts.create_literal_type({
            value: 'hello',
          }),
        }),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with name, export, members', () => {
  expect(dts.emit(
    dts.create_enum_declaration({
      name: 'E',
      export: true,
      members: [
        dts.create_variable_declaration({
          name: 'a',
          type: dts.create_literal_type({
            value: 5,
          }),
        }),
        dts.create_variable_declaration({
          name: 'b',
        }),
      ],
    }),
  )).toMatchSnapshot();
});

it('should throw error with members (VariableDeclaration with type (not undefined or LiteralType))', () => {
  expect(() => dts.emit(
    dts.create_enum_declaration({
      name: 'E',
      members: [
        dts.create_variable_declaration({
          name: 'a',
          type: dts.any_type,
        }),
      ],
    }),
  )).toThrowError();
});
