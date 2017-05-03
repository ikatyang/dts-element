jest.disableAutomock();

import * as dts from '../src/index';

const parameter_assertion_a = new dts.Parameter({
  name: 'a',
  type: dts.any_type,
});

const function_assertion = new dts.FunctionDeclaration({
  name: 'assertion',
  parameters: [parameter_assertion_a],
  return: new dts.TypeAssertion({
    parameter: parameter_assertion_a,
    type: dts.string_type,
  }),
});

const reference_somepath = new dts.Reference({
  kind: 'path',
  content: 'path/to/some.d.ts',
});

const object_type_generics = new dts.ObjectType({
  members: [
    new dts.ObjectMember({
      owned: ((
        generic_type_T: dts.GenericType,
        generic_type_U: dts.GenericType,
      ): dts.FunctionDeclaration => new dts.FunctionDeclaration({
        name: 'a',
        generics: [
          generic_type_T,
          generic_type_U,
        ],
        return: new dts.UnionType({
          types: [generic_type_T, generic_type_U],
        }),
      }))(
        new dts.GenericType({name: 'T'}),
        new dts.GenericType({name: 'U'}),
      ),
    }),
    new dts.ObjectMember({
      owned: new dts.IndexSignature({
        name: 'index',
        type: dts.any_type,
      }),
    }),
  ],
});

const type_declaration_t1 = new dts.TypeDeclaration({
  name: 't1',
  target: object_type_generics,
});

const enum_Flags = new dts.EnumDeclaration({
  name: 'Flags',
  members: [
    new dts.EnumMember({
      owned: new dts.VariableDeclaration({name: 'A'}),
    }),
    new dts.EnumMember({
      owned: new dts.VariableDeclaration({name: 'B'}),
      value: -2,
    }),
    new dts.EnumMember({
      owned: new dts.VariableDeclaration({name: 'C'}),
    }),
  ],
});

const export_all = new dts.ExportAll({from: 'path/to/other'});
const export_default = new dts.ExportDefault({value: type_declaration_t1});

const import_all = new dts.ImportAll({from: 'path/to/another'});

const variable_declaration_imported = new dts.VariableDeclaration({name: 'imported'});
const import_default = new dts.ImportDefault({
  from: 'path/to/something',
  value: variable_declaration_imported,
});

const variable_declaration_imported_named_1 = new dts.VariableDeclaration({name: 'imported_named_1'});
const variable_declaration_imported_named_2 = new dts.VariableDeclaration({name: 'imported_named_2'});
const import_named = new dts.ImportNamed({
  from: 'path/to/abc',
  members: [
    new dts.ImportMember({
      owned: variable_declaration_imported_named_1,
      name: 'some_1',
    }),
    new dts.ImportMember({
      owned: variable_declaration_imported_named_2,
      name: 'some_2',
    }),
  ],
});

const export_named = new dts.ExportNamed({
  members: [
    new dts.ExportMember({
      owned: variable_declaration_imported_named_1,
      name: 'out_1',
    }),
    new dts.ExportMember({
      owned: variable_declaration_imported_named_2,
      name: 'out_2',
    }),
  ],
});

const intersection_type = new dts.IntersectionType({
  types: [
    dts.string_type,
    new dts.KeyofType({owned: object_type_generics}),
    new dts.TypeofType({owned: variable_declaration_imported}),
    new dts.LiteralType({value: 'literal'}),
    new dts.TupleType({owneds: [
      dts.string_type,
      dts.null_type,
    ]}),
  ],
});

const type_declaration_t2 = new dts.TypeDeclaration({
  name: 't2',
  export: true,
  target: intersection_type,
});

const class_Element = new dts.ClassDeclaration({
  name: 'Element',
  export: true,
  members: [
    new dts.ClassMember({
      owned: new dts.VariableDeclaration({name: 'parameters'}),
    }),
    new dts.ClassMember({
      owned: new dts.FunctionDeclaration({
        name: 'test',
        return: new dts.SubType({
          target: dts.this_type,
          path: [new dts.LiteralType({value: 'parameters'})],
        }),
      }),
    }),
  ],
});

const document = new dts.Document({children: [
  reference_somepath,
  import_all,
  import_default,
  import_named,
  function_assertion,
  class_Element,
  type_declaration_t1,
  enum_Flags,
  export_all,
  export_named,
  export_default,
  type_declaration_t2,
]});

it('should return correctly', () => {
  expect(document.emit()).toMatchSnapshot();
});
