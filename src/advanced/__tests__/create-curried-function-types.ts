jest.disableAutomock();

import {any_type, number_type} from '../../constants';
import {Document} from '../../elements/document';
import {Parameter} from '../../elements/parameter';
import {TypeAssertion} from '../../elements/type-assertion';
import {ArrayType} from '../../elements/types/array-type';
import {BasicType} from '../../elements/types/basic-type';
import {FunctionType} from '../../elements/types/function-type';
import {GenericType} from '../../elements/types/generic-type';
import {UnionType} from '../../elements/types/union-type';
import {create_curried_function_types} from '../create-curried-function-types';

const name = 'adjust';
const generic_T = new GenericType({name: 'T'});
const generic_U = new GenericType({name: 'U'});
const function_type = new FunctionType({
  generics: [generic_T, generic_U],
  parameters: [
    new Parameter({
      name: 'fn',
      type: new FunctionType({
        parameters: [
          new Parameter({name: 'v', type: generic_T}),
        ],
        return: generic_U,
      }),
    }),
    new Parameter({name: 'index', type: number_type}),
    new Parameter({name: 'array', type: new ArrayType({owned: generic_T})}),
  ],
  return: new ArrayType({owned: new UnionType({types: [generic_T, generic_U]})}),
});

const parameter_value = new Parameter({
  name: 'value',
  type: any_type,
});
const function_type_assertion = new FunctionType({
  generics: [generic_T],
  parameters: [
    parameter_value,
    new Parameter({
      name: 'instance',
      type: generic_T,
    }),
  ],
  return: new TypeAssertion({
    parameter: parameter_value,
    type: generic_T,
  }),
});

it('should return correctly without placeholder', () => {
  const types = create_curried_function_types({name, type: function_type});
  const document = new Document({children: types});
  expect(document.emit()).toMatchSnapshot();
});

it('should return correctly with placeholder', () => {
  const placeholder = new BasicType({name: 'PH'});
  const types = create_curried_function_types({name, type: function_type, placeholder});
  const document = new Document({children: types});
  expect(document.emit()).toMatchSnapshot();
});

it('should return correctly with placeholder and selectable', () => {
  const placeholder = new BasicType({name: 'PH'});
  const types = create_curried_function_types({name, type: function_type, placeholder, selectable: true});
  const document = new Document({children: types});
  expect(document.emit()).toMatchSnapshot();
});

it('should throw error while using TypeAssertion', () => {
  const placeholder = new BasicType({name: 'PH'});
  // tslint:disable-next-line:typedef
  const create_types = () => create_curried_function_types({name, type: function_type_assertion, placeholder});
  expect(create_types).toThrowError();
});
