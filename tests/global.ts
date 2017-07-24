import * as dedent from 'dedent';
import * as dts from '../src/index';

const single_line_options = {
  prefix: '~ ',
};

const multi_line_options = {
  align: true,
  prefix: '~ ',
};

// template from https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html

it('should return correctly', () => {
  expect(
    dts.emit(
      dts.create_top_level_element({
        members: [
          dts.create_single_line_comment({
            prefix: ' ',
            text: dedent(`
            Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
            Project: [~THE PROJECT NAME~]
            Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>
          `),
          }),
          dts.create_function_declaration({
            name: 'myLib',
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
                If this library is callable (e.g. can be invoked as myLib(3)),
                include those call signatures here.
                Otherwise, delete this section.
              `),
              }),
            ],
          }),
          dts.create_function_declaration({
            name: 'myLib',
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
            name: 'myLib',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If you want the name of this library to be a valid type name,
                you can do so here.

                For example, this allows us to write 'var x: myLib';
                Be sure this actually makes sense! If it doesn't, just
                delete this declaration and add types inside the namespace below.
              `),
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
                    name: 'extras',
                    type: dts.create_array_type({
                      type: dts.string_type,
                    }),
                  }),
                }),
              ],
            }),
          }),
          dts.create_namespace_declaration({
            name: 'myLib',
            comments: [
              dts.create_multi_line_comment({
                ...multi_line_options,
                text: dedent(`
                If your library has properties exposed on a global variable,
                place them here.
                You should also place types (interfaces and type alias) here.
              `),
              }),
            ],
            members: [
              dts.create_variable_declaration({
                name: 'timeout',
                let: true,
                type: dts.number_type,
                comments: [
                  dts.create_single_line_comment({
                    ...single_line_options,
                    text: `We can write 'myLib.timeout = 50;'`,
                  }),
                ],
              }),
              dts.create_variable_declaration({
                name: 'version',
                const: true,
                type: dts.string_type,
                comments: [
                  dts.create_single_line_comment({
                    ...single_line_options,
                    text: `We can access 'myLib.version', but not change it`,
                  }),
                ],
              }),
              dts.create_class_declaration({
                name: 'Cat',
                comments: [
                  dts.create_single_line_comment({
                    ...single_line_options,
                    text: dedent(`
                    There's some class we can create via 'let c = new myLib.Cat(42)'
                    Or reference e.g. 'function f(c: myLib.Cat) { ... }
                  `),
                  }),
                ],
                members: [
                  dts.create_class_member({
                    owned: dts.create_constructor_type({
                      parameters: [
                        dts.create_parameter_declaration({
                          name: 'n',
                          type: dts.number_type,
                        }),
                      ],
                    }),
                  }),
                  dts.create_class_member({
                    readonly: true,
                    owned: dts.create_variable_declaration({
                      name: 'age',
                      type: dts.number_type,
                    }),
                    comments: [
                      dts.create_single_line_comment({
                        ...single_line_options,
                        text: `We can read 'c.age' from a 'Cat' instance`,
                      }),
                    ],
                  }),
                  dts.create_class_member({
                    owned: dts.create_function_declaration({
                      name: 'purr',
                      type: dts.create_function_type({
                        return: dts.void_type,
                      }),
                    }),
                    comments: [
                      dts.create_single_line_comment({
                        ...single_line_options,
                        text: `We can invoke 'c.purr()' from a 'Cat' instance`,
                      }),
                    ],
                  }),
                ],
              }),
              dts.create_interface_declaration({
                name: 'CatSettings',
                comments: [
                  dts.create_single_line_comment({
                    ...single_line_options,
                    text: dedent(`
                    We can declare a variable as
                      'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
                  `),
                  }),
                ],
                type: dts.create_object_type({
                  members: [
                    dts.create_object_member({
                      owned: dts.create_variable_declaration({
                        name: 'weight',
                        type: dts.number_type,
                      }),
                    }),
                    dts.create_object_member({
                      owned: dts.create_variable_declaration({
                        name: 'name',
                        type: dts.string_type,
                      }),
                    }),
                    dts.create_object_member({
                      optional: true,
                      owned: dts.create_variable_declaration({
                        name: 'tailLength',
                        type: dts.number_type,
                      }),
                    }),
                  ],
                }),
              }),
              dts.create_type_declaration({
                name: 'VetID',
                type: dts.create_union_type({
                  types: [dts.string_type, dts.number_type],
                }),
                comments: [
                  dts.create_single_line_comment({
                    ...single_line_options,
                    text: dedent(`
                    We can write 'const v: myLib.VetID = 42;'
                      or 'const v: myLib.VetID = "bob";'
                  `),
                  }),
                ],
              }),
              dts.create_function_declaration({
                name: 'checkCat',
                type: dts.create_function_type({
                  parameters: [
                    dts.create_parameter_declaration({
                      name: 'c',
                      type: dts.create_general_type({
                        name: 'Cat',
                      }),
                    }),
                    dts.create_parameter_declaration({
                      name: 's',
                      optional: true,
                      type: dts.create_general_type({
                        name: 'VetID',
                      }),
                    }),
                  ],
                }),
                comments: [
                  dts.create_single_line_comment({
                    ...single_line_options,
                    text: `We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'`,
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
