jest.unmock('../emit-extends');

import {GenericDefinition} from '../../elements/generic-definition';
import {BasicType} from '../../elements/types/basic-type';
import {GenericType} from '../../elements/types/generic-type';
import {Stack} from '../../stack';
import {emit_extends} from '../emit-extends';

const name = 'A';
const basic_type = new BasicType({name});
const generic_type: GenericType = Object.create(GenericType.prototype);
const generic_definition: GenericDefinition = Object.create(GenericDefinition.prototype);

it('should return empty string while extends is null', () => {
  expect(emit_extends(null, new Stack([generic_definition]))).toBe('');
});

it('should return empty string while stack is not GenericType-GenericDefinition', () => {
  expect(emit_extends(basic_type, new Stack())).toBe('');
});

it('should return emitted type while extends is not null and last stack is GenericType-GenericDefinition', () => {
  expect(emit_extends(basic_type, new Stack([generic_definition, generic_type]))).toMatchSnapshot();
});
