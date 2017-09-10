import dedent = require('dedent');
import * as dts from '../src/index';

const single_line_options = {
  prefix: ' ',
};

const multi_line_options = {
  align: true,
  prefix: '~ ',
};

// template from
//   https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html

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
            text: dedent(`
            This is the global-modifying module template file. You should rename it to index.d.ts
            and place it in a folder with the same name as the module.
            For example, if you were writing a file for "super-greeter", this
            file should be 'super-greeter/index.d.ts'
          `),
          }),
          dts.create_global_declaration({
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                Note: If your global-modifying module is callable or constructable, you'll
                need to combine the patterns here with those in the module-class or module-function
                template files
              `),
              }),
            ],
            members: [
              dts.create_interface_declaration({
                name: 'String',
                comments: [
                  dts.create_multi_line_comment({
                    ...multi_line_options,
                    text: dedent(`
                    Here, declare things that go in the global namespace, or augment
                    existing declarations in the global namespace
                  `),
                  }),
                ],
                type: dts.create_object_type({
                  members: [
                    dts.create_object_member({
                      owned: dts.create_function_declaration({
                        name: 'fancyFormat',
                        type: dts.create_function_type({
                          parameters: [
                            dts.create_parameter_declaration({
                              name: 'opts',
                              type: dts.create_general_type({
                                name: 'StringFormatOptions',
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
            ],
          }),
          dts.create_interface_declaration({
            name: 'StringFormatOptions',
            export: true,
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: `If your module exports types or values, write them as usual`,
              }),
            ],
            type: dts.create_object_type({
              members: [
                dts.create_object_member({
                  owned: dts.create_variable_declaration({
                    name: 'fancinessLevel',
                    type: dts.number_type,
                  }),
                }),
              ],
            }),
          }),
          dts.create_function_declaration({
            name: 'doSomething',
            export: true,
            type: dts.create_function_type({
              return: dts.void_type,
            }),
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: `For example, declaring a method on the module (in addition to its global side effects)`,
              }),
            ],
          }),
          dts.create_export_named({
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: `If your module exports nothing, you'll need this line. Otherwise, delete it`,
              }),
            ],
            members: [],
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});
