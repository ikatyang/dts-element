jest.disableAutomock();

import * as dts from '../src/index';

// template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html

const interface_MyClassMethodOptions = new dts.InterfaceDeclaration({
  name: 'MyClassMethodOptions',
  members: [
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: 'width',
        type: dts.number_type,
        optional: true,
      }),
    }),
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: 'height',
        type: dts.number_type,
        optional: true,
      }),
    }),
  ],
});

const namespace_MyClass = new dts.NamespaceDeclaration({
  name: 'MyClass',
  jsdoc: 'If you want to expose types from your module as well, you can\nplace them in this block.',
  children: [interface_MyClassMethodOptions],
});

const class_MyClass = new dts.ClassDeclaration({
  name: 'MyClass',
  jsdoc: 'Write your module\'s methods and properties in this class',
  members: [
    new dts.ClassMember({
      owned: new dts.Constructor({
        parameters: [
          new dts.Parameter({name: 'someParam', type: dts.string_type, flag: dts.ParameterFlags.OPTIONAL}),
        ],
      }),
    }),
    new dts.ClassMember({
      owned: new dts.VariableDeclaration({
        name: 'someProperty',
        type: new dts.ArrayType({owned: dts.string_type}),
      }),
    }),
    new dts.ClassMember({
      owned: new dts.FunctionDeclaration({
        name: 'myMethod',
        parameters: [
          new dts.Parameter({
            name: 'opts',
            type: new dts.SubType({
              namespaces: [namespace_MyClass],
              target: new dts.InterfaceType({owned: interface_MyClassMethodOptions}),
            }),
          }),
        ],
        return: dts.number_type,
      }),
    }),
  ],
});

const export_as = new dts.ExportAsNamespace({name: 'myClassLib'});
const export_equal = new dts.ExportEqual({value: class_MyClass});

const document = new dts.Document({children: [
  export_as,
  export_equal,
  class_MyClass,
  namespace_MyClass,
]});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
