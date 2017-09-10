import dedent = require('dedent');
import * as dts from '../src/index';

const single_line_options = {
  prefix: ' ',
};

const multi_line_options = {
  align: true,
  prefix: '~ ',
};

// template from https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html

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
            This is the module plugin template file. You should rename it to index.d.ts
            and place it in a folder with the same name as the module.
            For example, if you were writing a file for "super-greeter", this
            file should be 'super-greeter/index.d.ts'
          `),
          }),
          dts.create_import_namespace({
            name: 'm',
            from: 'someModule',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text:
                  'On this line, import the module which this module adds to',
              }),
            ],
          }),
          dts.create_import_namespace({
            name: 'other',
            from: 'anotherModule',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: 'You can also import other modules if needed',
              }),
            ],
          }),
          dts.create_module_declaration({
            name: 'someModule',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text:
                  'Here, declare the same module as the one you imported above',
              }),
            ],
            members: [
              dts.create_function_declaration({
                name: 'theNewMethod',
                export: true,
                type: dts.create_function_type({
                  parameters: [
                    dts.create_parameter_declaration({
                      name: 'x',
                      type: dts.create_general_type({
                        parents: ['m'],
                        name: 'foo',
                      }),
                    }),
                  ],
                  return: dts.create_general_type({
                    parents: ['other'],
                    name: 'bar',
                  }),
                }),
                comments: [
                  dts.create_multi_line_comment({
                    ...multi_line_options,
                    text: dedent(`
                    Inside, add new function, classes, or variables. You can use
                    unexported types from the original module if needed.
                  `),
                  }),
                ],
              }),
              dts.create_interface_declaration({
                name: 'SomeModuleOptions',
                export: true,
                type: dts.create_object_type({
                  members: [
                    dts.create_object_member({
                      optional: true,
                      owned: dts.create_variable_declaration({
                        name: 'someModuleSetting',
                        type: dts.string_type,
                      }),
                    }),
                  ],
                }),
                comments: [
                  dts.create_multi_line_comment({
                    ...multi_line_options,
                    text: dedent(`
                    You can also add new properties to existing interfaces from
                    the original module by writing interface augmentations
                  `),
                  }),
                ],
              }),
              dts.create_interface_declaration({
                name: 'MyModulePluginOptions',
                export: true,
                type: dts.create_object_type({
                  members: [
                    dts.create_object_member({
                      owned: dts.create_variable_declaration({
                        name: 'size',
                        type: dts.number_type,
                      }),
                    }),
                  ],
                }),
                comments: [
                  dts.create_multi_line_comment({
                    ...multi_line_options,
                    text: dedent(`
                    New types can also be declared and will appear as if they
                    are in the original module
                  `),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});
