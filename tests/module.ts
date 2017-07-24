import * as dedent from 'dedent';
import * as dts from '../src/index';

const single_line_options = {
  prefix: ' ',
};

const multi_line_options = {
  align: true,
  prefix: '~ ',
};

// template from https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

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
            This is the module template file. You should rename it to index.d.ts
            and place it in a folder with the same name as the module.
            For example, if you were writing a file for "super-greeter", this
            file should be 'super-greeter/index.d.ts'
          `),
          }),
          dts.create_export_namespace({
            name: 'myLib',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If this module is a UMD module that exposes a global variable 'myLib' when
                loaded outside a module loader environment, declare that global here.
                Otherwise, delete this declaration.
              `),
              }),
            ],
          }),
          dts.create_function_declaration({
            name: 'myMethod',
            export: true,
            type: dts.create_function_type({
              parameters: [
                dts.create_parameter_declaration({
                  name: 'a',
                  type: dts.string_type,
                }),
              ],
              return: dts.string_type,
            }),
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If this module has methods, declare them as functions like so.
              `),
              }),
            ],
          }),
          dts.create_function_declaration({
            name: 'myOtherMethod',
            export: true,
            type: dts.create_function_type({
              parameters: [
                dts.create_parameter_declaration({
                  name: 'a',
                  type: dts.number_type,
                }),
              ],
              return: dts.number_type,
            }),
          }),
          dts.create_interface_declaration({
            name: 'someType',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text:
                  'You can declare types that are available via importing the module',
              }),
            ],
            type: dts.create_object_type({
              members: [
                dts.create_object_member({
                  owned: dts.create_variable_declaration({
                    name: 'name',
                    type: dts.string_type,
                  }),
                }),
                dts.create_object_member({
                  owned: dts.create_variable_declaration({
                    name: 'length',
                    type: dts.number_type,
                  }),
                }),
                dts.create_object_member({
                  optional: true,
                  owned: dts.create_variable_declaration({
                    name: 'extra',
                    type: dts.create_array_type({
                      type: dts.string_type,
                    }),
                  }),
                }),
              ],
            }),
          }),
          dts.create_variable_declaration({
            name: 'myField',
            const: true,
            export: true,
            type: dts.number_type,
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text:
                  'You can declare properties of the module using const, let, or var',
              }),
            ],
          }),
          dts.create_namespace_declaration({
            name: 'subProp',
            export: true,
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If there are types, properties, or methods inside dotted names
                of the module, declare them inside a 'namespace'.
              `),
              }),
            ],
            members: [
              dts.create_function_declaration({
                name: 'foo',
                export: true,
                type: dts.create_function_type({
                  return: dts.void_type,
                }),
                comments: [
                  dts.create_multi_line_comment({
                    ...multi_line_options,
                    text: dedent(`
                    For example, given this definition, someone could write:
                      import { subProp } from 'yourModule';
                      subProp.foo();
                    or
                      import * as yourMod from 'yourModule';
                      yourMod.subProp.foo();
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
