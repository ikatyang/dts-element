import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_object_type({
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
  )).toMatchSnapshot();
});
