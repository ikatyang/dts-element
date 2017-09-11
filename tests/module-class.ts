import dedent = require('dedent');
import * as dts from '../src/index';

const single_line_options = {
  prefix: ' ',
};

const multi_line_options = {
  align: true,
  prefix: '~ ',
};

// template from https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html

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
            This is the module template file for class modules.
            You should rename it to index.d.ts and place it in a folder with the same name as the module.
            For example, if you were writing a file for "super-greeter", this
            file should be 'super-greeter/index.d.ts'
          `),
          }),
          dts.create_multi_line_comment({
            ...multi_line_options,
            text: dedent(`
            Note that ES6 modules cannot directly export callable functions.
            This file should be imported using the CommonJS-style:
              import x = require('someLibrary');

            Refer to the documentation to understand common
            workarounds for this limitation of ES6 modules.
          `),
          }),
          dts.create_export_namespace({
            name: 'myClassLib',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If this module is a UMD module that exposes a global variable 'myFuncLib' when
                loaded outside a module loader environment, declare that global here.
                Otherwise, delete this declaration.
              `),
              }),
            ],
          }),
          dts.create_export_equal({
            value: 'MyClass',
          }),
          dts.create_class_declaration({
            name: 'MyClass',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                Write your module's methods and properties in this class
              `),
              }),
            ],
            members: [
              dts.create_class_member({
                owned: dts.create_constructor_type({
                  parameters: [
                    dts.create_parameter_declaration({
                      name: 'someParam',
                      optional: true,
                      type: dts.string_type,
                    }),
                  ],
                }),
              }),
              dts.create_class_member({
                owned: dts.create_variable_declaration({
                  name: 'someProperty',
                  type: dts.create_array_type({
                    type: dts.string_type,
                  }),
                }),
              }),
              dts.create_class_member({
                owned: dts.create_function_declaration({
                  name: 'myMethod',
                  type: dts.create_function_type({
                    parameters: [
                      dts.create_parameter_declaration({
                        name: 'opts',
                        type: dts.create_general_type({
                          parents: ['MyClass'],
                          name: 'MyClassMethodOptions',
                        }),
                      }),
                    ],
                    return: dts.number_type,
                  }),
                }),
              }),
            ],
          }),
          dts.create_namespace_declaration({
            name: 'MyClass',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If you want to expose types from your module as well, you can
                place them in this block.
              `),
              }),
            ],
            members: [
              dts.create_interface_declaration({
                name: 'MyClassMethodOptions',
                export: true,
                type: dts.create_object_type({
                  members: [
                    dts.create_object_member({
                      optional: true,
                      owned: dts.create_variable_declaration({
                        name: 'width',
                        type: dts.number_type,
                      }),
                    }),
                    dts.create_object_member({
                      optional: true,
                      owned: dts.create_variable_declaration({
                        name: 'height',
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
