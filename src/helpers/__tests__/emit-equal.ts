jest.unmock('../emit-equal');

import {GenericDefinition} from '../../elements/generic-definition';
import {BasicType} from '../../elements/types/basic-type';
import {Stack} from '../../stack';
import {emit_equal} from '../emit-equal';

const name = 'A';
const basic_type = new BasicType({name});
const generic_definition: GenericDefinition = Object.create(GenericDefinition.prototype);

it('should return empty string while default is null', () => {
  expect(emit_equal(null, new Stack([generic_definition]))).toBe('');
});

it('should return empty string while stack is not GenericDefinition', () => {
  expect(emit_equal(basic_type, new Stack())).toBe('');
});

it('should return default with emitted type while default is not null and stack is GenericDefinition', () => {
  expect(emit_equal(basic_type, new Stack([generic_definition]))).toMatchSnapshot();
});
