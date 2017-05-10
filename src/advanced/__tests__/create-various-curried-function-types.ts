jest.disableAutomock();

import {TypeDeclaration} from '../../elements/declarations/type-declaration';
import {Document} from '../../elements/document';
import {Parameter} from '../../elements/parameter';
import {ArrayType} from '../../elements/types/array-type';
import {BasicType} from '../../elements/types/basic-type';
import {FunctionType} from '../../elements/types/function-type';
import {GenericType} from '../../elements/types/generic-type';
import {TypedType} from '../../elements/types/typed-type';
import {create_various_curried_function_types} from '../create-various-curried-function-types';

const name = 'map';
const generic_T = new GenericType({name: 'T'});
const generic_U = new GenericType({name: 'U'});
const parameter_fn = new Parameter({
  name: 'fn',
  type: new FunctionType({
    parameters: [new Parameter({name: 'v', type: generic_T})],
    return: generic_U,
  }),
});

const function_type_array = new FunctionType({
  generics: [generic_T, generic_U],
  parameters: [
    parameter_fn,
    new Parameter({name: 'array', type: new ArrayType({owned: generic_T})}),
  ],
  return: new ArrayType({owned: generic_U}),
});

const mappable = new TypeDeclaration({name: 'Mappable'});
const function_type_mappable = new FunctionType({
  generics: [generic_T, generic_U],
  parameters: [
    parameter_fn,
    new Parameter({name: 'mappable', type: new TypedType({owned: mappable, generics: [generic_T]})}),
  ],
  return: new TypedType({owned: mappable, generics: [generic_U]}),
});

it('should return correctly', () => {
  const types = create_various_curried_function_types({
    name,
    types: {
      array: function_type_array,
      mappable: function_type_mappable,
    },
    selectable: true,
    placeholder: new BasicType({name: 'PH'}),
  });
  const document = new Document({children: types});
  expect(document.emit()).toMatchSnapshot();
});
