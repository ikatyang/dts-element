jest.disableAutomock();

import * as dts from '../src/index';

// template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-plugin-d-ts.html

const type_BinaryFormatCallback = new dts.TypeDeclaration({
  name: 'BinaryFormatCallback',
  target: new dts.FunctionType({
    parameters: [new dts.Parameter({name: 'n', type: dts.number_type})],
    return: dts.string_type,
  }),
});

const interface_BinaryFormatOptions = new dts.InterfaceDeclaration({
  name: 'BinaryFormatOptions',
  members: [
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: 'prefix',
        optional: true,
        type: dts.string_type,
      }),
    }),
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: 'padding',
        type: dts.number_type,
      }),
    }),
  ],
});

const namespace_MyLibrary = new dts.NamespaceDeclaration({
  name: 'MyLibrary',
  children: [type_BinaryFormatCallback, interface_BinaryFormatOptions],
  // tslint:disable-next-line max-line-length
  jsdoc: 'If you need to declare several types, place them inside a namespace\nto avoid adding too many things to the global namespace.',
});

const parameter_opts = new dts.Parameter({
  name: 'opts',
  flag: dts.ParameterFlags.OPTIONAL,
  type: new dts.SubType({
    namespaces: [namespace_MyLibrary],
    target: new dts.InterfaceType({owned: interface_BinaryFormatOptions}),
  }),
});

const function_toBinaryString_1 = new dts.FunctionDeclaration({
  name: 'toBinaryString',
  type: new dts.FunctionType({
    parameters: [parameter_opts],
    return: dts.string_type,
  }),
});

const function_toBinaryString_2 = new dts.FunctionDeclaration({
  name: 'toBinaryString',
  type: new dts.FunctionType({
    parameters: [
      new dts.Parameter({name: 'callback', type: new dts.SubType({
        namespaces: [namespace_MyLibrary],
        target: new dts.TypedType({owned: type_BinaryFormatCallback}),
      })}),
      parameter_opts,
    ],
    return: dts.string_type,
  }),
});

const interface_Number = new dts.InterfaceDeclaration({
  name: 'Number',
  members: [
    new dts.ObjectMember({owned: function_toBinaryString_1}),
    new dts.ObjectMember({owned: function_toBinaryString_2}),
  ],
  // tslint:disable-next-line max-line-length
  jsdoc: 'Write a declaration for the original type and add new members.\nFor example, this adds a \'toBinaryString\' method with to overloads to\nthe built-in number type.',
});

const document = new dts.Document({
  children: [interface_Number, namespace_MyLibrary],
});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
