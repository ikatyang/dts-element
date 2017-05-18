import * as dts from '../index';

it('should return correctly', () => {
  expect(dts.emit(
    dts.create_top_level_element({
      members: [
        dts.create_triple_slash_reference({
          path: 'path/to/somewhere',
        }),
        dts.create_module_declaration({
          name: 'something',
        }),
        dts.create_class_declaration({
          name: 'C',
        }),
      ],
    }),
  )).toMatchSnapshot();
});
