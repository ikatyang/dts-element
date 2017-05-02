jest.disableAutomock();

import * as dts from '../src/index';

// template: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html

const function_myLib_a = new dts.FunctionDeclaration({
  name: 'myLib',
  // tslint:disable-next-line max-line-length
  jsdoc: 'If this library is callable (e.g. can be invoked as myLib(3)),\ninclude those call signatures here.\nOtherwise, delete this section.',
  parameters: [
    new dts.Parameter({name: 'a', type: dts.string_type}),
  ],
  return: dts.string_type,
});

const function_myLib_b = new dts.FunctionDeclaration({
  name: 'myLib',
  parameters: [
    new dts.Parameter({name: 'a', type: dts.number_type}),
  ],
  return: dts.number_type,
});

const interface_myLib = new dts.InterfaceDeclaration({
  name: 'myLib',
  // tslint:disable-next-line max-line-length
  jsdoc: 'If you want the name of this library to be a valid type name,\nyou can do so here.\n\nFor example, this allows us to write \'var x: myLib\';\nBe sure this actually makes sense! If it doesn\'t, just\ndelete this declaration and add types inside the namespace below.',
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
        type: new dts.ArrayType({owned: dts.string_type}),
        optional: true,
      }),
    }),
  ],
});

const class_Cat = new dts.ClassDeclaration({
  name: 'Cat',
  // tslint:disable-next-line max-line-length
  jsdoc: 'There\'s some class we can create via \'let c = new myLib.Cat(42)\'\nOr reference e.g. \'function f(c: myLib.Cat) { ... }',
  members: [
    new dts.ClassMember({
      owned: new dts.Constructor({
        parameters: [
          new dts.Parameter({name: 'n', type: dts.number_type}),
        ],
      }),
    }),
    new dts.ClassMember({
      readonly: true,
      owned: new dts.VariableDeclaration({
        name: 'age',
        type: dts.number_type,
        jsdoc: 'We can read \'c.age\' from a \'Cat\' instance',
      }),
    }),
    new dts.ClassMember({
      owned: new dts.FunctionDeclaration({
        name: 'purr',
        return: dts.void_type,
        jsdoc: 'We can invoke \'c.purr()\' from a \'Cat\' instance',
      }),
    }),
  ],
});

const type_VetID = new dts.TypeDeclaration({
  name: 'VetID',
  jsdoc: 'We can write \'const v: myLib.VetID = 42;\'\nor \'const v: myLib.VetID = "bob";\'',
  target: new dts.UnionType({
    types: [dts.string_type, dts.number_type],
  }),
});

const namespace_myLib = new dts.NamespaceDeclaration({
  name: 'myLib',
  // tslint:disable-next-line max-line-length
  jsdoc: 'If your library has properties exposed on a global variable,\nplace them here.\nYou should also place types (interfaces and type alias) here.',
  children: [
    new dts.VariableDeclaration({
      name: 'timeout',
      kind: 'let',
      type: dts.number_type,
      jsdoc: 'We can write \'myLib.timeout = 50;\'',
    }),
    new dts.VariableDeclaration({
      name: 'version',
      kind: 'const',
      type: dts.string_type,
      jsdoc: 'We can access \'myLib.version\', but not change it',
    }),
    class_Cat,
    new dts.InterfaceDeclaration({
      name: 'CatSettings',
      jsdoc: 'We can declare a variable as\n\'var s: myLib.CatSettings = { weight: 5, name: "Maru" };\'',
      members: [
        new dts.ObjectMember({
          owned: new dts.VariableDeclaration({
            name: 'weight',
            type: dts.number_type,
          }),
        }),
        new dts.ObjectMember({
          owned: new dts.VariableDeclaration({
            name: 'name',
            type: dts.string_type,
          }),
        }),
        new dts.ObjectMember({
          owned: new dts.VariableDeclaration({
            name: 'tailLength',
            type: dts.number_type,
            optional: true,
          }),
        }),
      ],
    }),
    type_VetID,
    new dts.FunctionDeclaration({
      name: 'checkCat',
      jsdoc: 'We can invoke \'myLib.checkCat(c)\' or \'myLib.checkCat(c, v);\'',
      parameters: [
        new dts.Parameter({
          name: 'c',
          type: new dts.ClassType({owned: class_Cat}),
        }),
        new dts.Parameter({
          name: 's',
          flag: dts.ParameterFlag.OPTIONAL,
          type: new dts.TypedType({owned: type_VetID}),
        }),
      ],
    }),
  ],
});

const document = new dts.Document({
  children: [
    function_myLib_a,
    function_myLib_b,
    interface_myLib,
    namespace_myLib,
  ],
});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
