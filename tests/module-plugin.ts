jest.disableAutomock();

import * as dts from '../src/index';

// template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html

const namespace_m = new dts.NamespaceDeclaration({name: 'm'});
const import_named_all_m = new dts.ImportNamedAll({from: 'someModule', value: namespace_m});

const namespace_other = new dts.NamespaceDeclaration({name: 'other'});
const import_named_all_other = new dts.ImportNamedAll({from: 'anotherModule', value: namespace_other});

const module_someModule = new dts.ModuleDeclaration({
  name: 'someModule',
  jsdoc: 'Here, declare the same module as the one you imported above',
  children: [
    new dts.FunctionDeclaration({
      name: 'theNewMethod',
      export: true,
      // tslint:disable-next-line max-line-length
      jsdoc: 'Inside, add new function, classes, or variables. You can use\nunexported types from the original module if needed.',
      type: new dts.FunctionType({
        parameters: [
          new dts.Parameter({
            name: 'x',
            type: new dts.SubType({
              namespaces: [namespace_m],
              target: new dts.InterfaceType({
                owned: new dts.InterfaceDeclaration({name: 'foo'}),
              }),
            }),
          }),
        ],
        return: new dts.SubType({
          namespaces: [namespace_other],
          target: new dts.InterfaceType({
            owned: new dts.InterfaceDeclaration({name: 'bar'}),
          }),
        }),
      }),
    }),
    new dts.InterfaceDeclaration({
      name: 'SomeModuleOptions',
      export: true,
      // tslint:disable-next-line max-line-length
      jsdoc: 'You can also add new properties to existing interfaces from\nthe original module by writing interface augmentations',
      members: [
        new dts.ObjectMember({
          owned: new dts.VariableDeclaration({
            name: 'someModuleSetting',
            optional: true,
            type: dts.string_type,
          }),
        }),
      ],
    }),
    new dts.InterfaceDeclaration({
      name: 'MyModulePluginOptions',
      export: true,
      jsdoc: 'New types can also be declared and will appear as if they\nare in the original module',
      members: [
        new dts.ObjectMember({
          owned: new dts.VariableDeclaration({
            name: 'size',
            type: dts.number_type,
          }),
        }),
      ],
    }),
  ],
});

const document = new dts.Document({children: [
  import_named_all_m,
  import_named_all_other,
  module_someModule,
]});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
