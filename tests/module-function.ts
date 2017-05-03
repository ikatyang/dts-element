jest.disableAutomock();

import * as dts from '../src/index';

// template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html

const interface_LengthReturnType = new dts.InterfaceDeclaration({
  name: 'LengthReturnType',
  members: [
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({name: 'width', type: dts.number_type}),
    }),
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({name: 'height', type: dts.number_type}),
    }),
  ],
});

const interface_NamedReturnType = new dts.InterfaceDeclaration({
  name: 'NamedReturnType',
  members: [
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({name: 'firstName', type: dts.string_type}),
    }),
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({name: 'lastName', type: dts.string_type}),
    }),
  ],
});

const namespace_MyFunction = new dts.NamespaceDeclaration({
  name: 'MyFunction',
  // tslint:disable-next-line max-line-length
  jsdoc: 'If you want to expose types from your module as well, you can\nplace them in this block. Often you will want to describe the\nshape of the return type of the function; that type should\nbe declared in here, as this example shows.',
  children: [
    interface_LengthReturnType,
    interface_NamedReturnType,
    new dts.VariableDeclaration({
      name: 'defaultName',
      kind: dts.VariableKinds.CONST,
      type: dts.string_type,
      // tslint:disable-next-line max-line-length
      jsdoc: 'If the module also has properties, declare them here. For example,\nthis declaration says that this code is legal:\nimport f = require(\'myFuncLibrary\');\nconsole.log(f.defaultName);',
    }),
    new dts.VariableDeclaration({
      name: 'defaultLength',
      kind: dts.VariableKinds.LET,
      type: dts.number_type,
    }),
  ],
});

const function_MyFunction_1 = new dts.FunctionDeclaration({
  name: 'MyFunction',
  jsdoc: 'This example shows how to have multiple overloads for your function',
  type: new dts.FunctionType({
    parameters: [
      new dts.Parameter({
        name: 'name',
        type: dts.string_type,
      }),
    ],
    return: new dts.SubType({
      namespaces: [namespace_MyFunction],
      target: new dts.InterfaceType({
        owned: interface_NamedReturnType,
      }),
    }),
  }),
});

const function_MyFunction_2 = new dts.FunctionDeclaration({
  name: 'MyFunction',
  type: new dts.FunctionType({
    parameters: [
      new dts.Parameter({
        name: 'length',
        type: dts.number_type,
      }),
    ],
    return: new dts.SubType({
      namespaces: [namespace_MyFunction],
      target: new dts.InterfaceType({
        owned: interface_LengthReturnType,
      }),
    }),
  }),
});

const export_as = new dts.ExportAsNamespace({name: 'myFuncLib'});
const export_equal = new dts.ExportEqual({value: namespace_MyFunction});

const document = new dts.Document({children: [
  export_as,
  export_equal,
  function_MyFunction_1,
  function_MyFunction_2,
  namespace_MyFunction,
]});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
