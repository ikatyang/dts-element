jest.unmock('../emit-equal');

import {InterfaceDeclaration} from '../../elements/declarations/interface-declaration';
import {BasicType} from '../../elements/types/basic-type';
import {Stack} from '../../stack';
import {emit_equal} from '../emit-equal';

const name = 'A';
const basic_type = new BasicType({name});
const interface_declaration: InterfaceDeclaration = Object.create(InterfaceDeclaration.prototype);

it('should return empty string while default is null', () => {
  expect(emit_equal(null, new Stack([interface_declaration]))).toBe('');
});

it('should return empty string while stack is not InterfaceDeclaration', () => {
  expect(emit_equal(basic_type, new Stack())).toBe('');
});

it('should return default with emitted type while default is not null and stack is InterfaceDeclaration', () => {
  expect(emit_equal(basic_type, new Stack([interface_declaration]))).toMatchSnapshot();
});
