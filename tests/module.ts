jest.disableAutomock();

import * as dts from '../src/index';

// template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

const export_as = new dts.ExportAsNamespace({name: 'myLib'});

const function_myMethod = new dts.FunctionDeclaration({
  name: 'myMethod',
  export: true,
  jsdoc: 'If this module has methods, declare them as functions like so.',
  type: new dts.FunctionType({
    parameters: [
      new dts.Parameter({name: 'a', type: dts.string_type}),
    ],
    return: dts.string_type,
  }),
});

const function_myOtherMethod = new dts.FunctionDeclaration({
  name: 'myOtherMethod',
  export: true,
  type: new dts.FunctionType({
    parameters: [
      new dts.Parameter({name: 'a', type: dts.number_type}),
    ],
    return: dts.number_type,
  }),
});

const interface_someType = new dts.InterfaceDeclaration({
  name: 'someType',
  export: true,
  jsdoc: 'You can declare types that are available via importing the module',
  members: [
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: 'name',
        type: dts.string_type,
      }),
    }),
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: 'length',
        type: dts.number_type,
      }),
    }),
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: 'extras',
        optional: true,
        type: new dts.ArrayType({
          owned: dts.string_type,
        }),
      }),
    }),
  ],
});

const variable_myField = new dts.VariableDeclaration({
  name: 'myField',
  kind: 'const',
  export: true,
  type: dts.number_type,
  jsdoc: 'You can declare properties of the module using const, let, or var',
});

const namespace_subProp = new dts.NamespaceDeclaration({
  name: 'subProp',
  // tslint:disable-next-line max-line-length
  jsdoc: 'If there are types, properties, or methods inside dotted names\nof the module, declare them inside a \'namespace\'.',
  export: true,
  children: [
    new dts.FunctionDeclaration({
      name: 'foo',
      // tslint:disable-next-line max-line-length
      jsdoc: 'For example, given this definition, someone could write:\n  import { subProp } from \'yourModule\';\n  subProp.foo();\nor\n  import * as yourMod from \'yourModule\'\n  yourMod.subProp.foo();',
      type: new dts.FunctionType({
        return: dts.void_type,
      }),
    }),
  ],
});

const document = new dts.Document({children: [
  export_as,
  function_myMethod,
  function_myOtherMethod,
  interface_someType,
  variable_myField,
  namespace_subProp,
]});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
