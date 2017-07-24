import * as dedent from 'dedent';
import * as dts from '../src/index';

const single_line_options = {
  prefix: ' ',
};

const multi_line_options = {
  align: true,
  prefix: '~ ',
};

// template from https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-plugin-d-ts.html

it('should return correctly', () => {
  expect(
    dts.emit(
      dts.create_top_level_element({
        members: [
          dts.create_single_line_comment({
            ...single_line_options,
            text: dedent(`
            Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
            Project: [~THE PROJECT NAME~]
            Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>
          `),
          }),
          dts.create_multi_line_comment({
            ...multi_line_options,
            text: `This template shows how to write a global plugin.`,
          }),
          dts.create_interface_declaration({
            name: 'Number',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                Write a declaration for the original type and add new members.
                For example, this adds a 'toBinaryString' method with to overloads to
                the built-in number type.
              `),
              }),
            ],
            type: dts.create_object_type({
              members: [
                dts.create_object_member({
                  owned: dts.create_function_declaration({
                    name: 'toBinaryString',
                    type: dts.create_function_type({
                      parameters: [
                        dts.create_parameter_declaration({
                          name: 'opts',
                          optional: true,
                          type: dts.create_general_type({
                            parents: ['MyLibrary'],
                            name: 'BinaryFormatOptions',
                          }),
                        }),
                      ],
                      return: dts.string_type,
                    }),
                  }),
                }),
                dts.create_object_member({
                  owned: dts.create_function_declaration({
                    name: 'toBinaryString',
                    type: dts.create_function_type({
                      parameters: [
                        dts.create_parameter_declaration({
                          name: 'callback',
                          type: dts.create_general_type({
                            parents: ['MyLibrary'],
                            name: 'BinaryFormatCallback',
                          }),
                        }),
                        dts.create_parameter_declaration({
                          name: 'opts',
                          optional: true,
                          type: dts.create_general_type({
                            parents: ['MyLibrary'],
                            name: 'BinaryFormatOptions',
                          }),
                        }),
                      ],
                      return: dts.string_type,
                    }),
                  }),
                }),
              ],
            }),
          }),
          dts.create_namespace_declaration({
            name: 'MyLibrary',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If you need to declare several types, place them inside a namespace
                to avoid adding too many things to the global namespace.
              `),
              }),
            ],
            members: [
              dts.create_type_declaration({
                name: 'BinaryFormatCallback',
                type: dts.create_function_type({
                  parameters: [
                    dts.create_parameter_declaration({
                      name: 'n',
                      type: dts.number_type,
                    }),
                  ],
                  return: dts.string_type,
                }),
              }),
              dts.create_interface_declaration({
                name: 'BinaryFormatOptions',
                type: dts.create_object_type({
                  members: [
                    dts.create_object_member({
                      optional: true,
                      owned: dts.create_variable_declaration({
                        name: 'prefix',
                        type: dts.string_type,
                      }),
                    }),
                    dts.create_object_member({
                      owned: dts.create_variable_declaration({
                        name: 'padding',
                        type: dts.number_type,
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
