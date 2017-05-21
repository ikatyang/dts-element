import * as dedent from 'dedent';
import * as dts from '../src/index';

const single_line_options = {
  prefix: ' ',
};

const multi_line_options = {
  align: true,
  prefix: '~ ',
};

// template from https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html

it('should return correctly', () => {
  expect(dts.emit(
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
            This is the module template file for function modules.
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
          name: 'myFuncLib',
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
          value: 'myFunction',
        }),
        dts.create_function_declaration({
          name: 'MyFunction',
          type: dts.create_function_type({
            parameters: [
              dts.create_parameter_declaration({
                name: 'name',
                type: dts.string_type,
              }),
            ],
            return: dts.create_general_type({
              parents: ['MyFunction'],
              name: 'NamedReturnType',
            }),
          }),
          comments: [
            dts.create_multi_line_comment({
              ...multi_line_options,
              text: dedent(`
                This example shows how to have multiple overloads for your function
              `),
            }),
          ],
        }),
        dts.create_function_declaration({
          name: 'MyFunction',
          type: dts.create_function_type({
            parameters: [
              dts.create_parameter_declaration({
                name: 'length',
                type: dts.number_type,
              }),
            ],
            return: dts.create_general_type({
              parents: ['MyFunction'],
              name: 'LengthReturnType',
            }),
          }),
        }),
        dts.create_namespace_declaration({
          name: 'MyFunction',
          comments: [
            dts.create_multi_line_comment({
              ...multi_line_options,
              text: dedent(`
                If you want to expose types from your module as well, you can
                place them in this block. Often you will want to describe the
                shape of the return type of the function; that type should
                be declared in here, as this example shows.
              `),
            }),
          ],
          members: [
            dts.create_interface_declaration({
              name: 'LengthReturnType',
              export: true,
              type: dts.create_object_type({
                members: [
                  dts.create_object_member({
                    owned: dts.create_variable_declaration({
                      name: 'width',
                      type: dts.number_type,
                    }),
                  }),
                  dts.create_object_member({
                    owned: dts.create_variable_declaration({
                      name: 'height',
                      type: dts.number_type,
                    }),
                  }),
                ],
              }),
            }),
            dts.create_interface_declaration({
              name: 'NamedReturnType',
              export: true,
              type: dts.create_object_type({
                members: [
                  dts.create_object_member({
                    owned: dts.create_variable_declaration({
                      name: 'firstName',
                      type: dts.string_type,
                    }),
                  }),
                  dts.create_object_member({
                    owned: dts.create_variable_declaration({
                      name: 'lastName',
                      type: dts.string_type,
                    }),
                  }),
                ],
              }),
            }),
            dts.create_variable_declaration({
              name: 'defaultName',
              const: true,
              export: true,
              type: dts.string_type,
              comments: [
                dts.create_multi_line_comment({
                  ...multi_line_options,
                  text: dedent(`
                    If the module also has properties, declare them here. For example,
                    this declaration says that this code is legal:
                      import f = require('myFuncLibrary');
                      console.log(f.defaultName);
                  `),
                }),
              ],
            }),
            dts.create_variable_declaration({
              name: 'defaultLength',
              let: true,
              export: true,
              type: dts.number_type,
            }),
          ],
        }),
      ],
    }),
  )).toMatchSnapshot();
});
