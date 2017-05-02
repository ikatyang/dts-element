jest.disableAutomock();

import * as dts from '../src/index';

// template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html

const interface_StringFormatOptions = new dts.InterfaceDeclaration({
  name: 'StringFormatOptions',
  export: true,
  members: [
    new dts.ObjectMember({owned: new dts.VariableDeclaration({name: 'fancinessLevel', type: dts.number_type})}),
  ],
  // tslint:disable-next-line max-line-length
  jsdoc: 'Here, declare things that go in the global namespace, or augment\nexisting declarations in the global namespace',
});

const interface_String = new dts.InterfaceDeclaration({
  name: 'String',
  members: [
    new dts.ObjectMember({
      owned: new dts.FunctionDeclaration({
        name: 'fancyFormat',
        parameters: [new dts.Parameter({
          name: 'opts',
          type: new dts.InterfaceType({owned: interface_StringFormatOptions}),
        })],
        return: dts.string_type,
      }),
    }),
  ],
  jsdoc: 'If your module exports types or values, write them as usual',
});

const declare_global = new dts.DeclareGlobal({children: [interface_String]});

const function_doSomething = new dts.FunctionDeclaration({
  name: 'doSomething',
  return: dts.void_type,
  export: true,
  jsdoc: 'For example, declaring a method on the module (in addition to its global side effects)',
});

const export_none = new dts.ExportNamed({members: []});

const document = new dts.Document({children: [
  declare_global,
  interface_StringFormatOptions,
  function_doSomething,
  export_none,
]});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
