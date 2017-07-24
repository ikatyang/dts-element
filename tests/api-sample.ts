import * as dts from '../src/index';

it('should return correctly', () => {
  expect(
    dts.emit(
      dts.create_top_level_element({
        members: [
          dts.create_namespace_declaration({
            name: 'SomeNamespace',
            members: [
              dts.create_interface_declaration({
                name: 'MyInterface',
                jsdoc: 'This is my nice interface',
                type: dts.create_object_type({
                  members: [
                    dts.create_object_member({
                      optional: true,
                      owned: dts.create_function_declaration({
                        name: 'getThing',
                        type: dts.create_function_type({
                          parameters: [
                            dts.create_parameter_declaration({
                              name: 'x',
                              type: dts.number_type,
                            }),
                          ],
                          return: dts.void_type,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});
