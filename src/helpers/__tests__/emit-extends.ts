jest.unmock('../emit-extends');

import {InterfaceDeclaration} from '../../elements/declarations/interface-declaration';
import {BasicType} from '../../elements/types/basic-type';
import {Stack} from '../../stack';
import {emit_extends} from '../emit-extends';

const name = 'A';
const basic_type = new BasicType({name});
const interface_declaration: InterfaceDeclaration = Object.create(InterfaceDeclaration.prototype);

it('should return empty string while extends is null', () => {
  expect(emit_extends(null, new Stack([interface_declaration]))).toBe('');
});

it('should return empty string while stack is not InterfaceDeclaration', () => {
  expect(emit_extends(basic_type, new Stack())).toBe('');
});

it('should return extends with emitted type while extends is not null and stack is InterfaceDeclaration', () => {
  expect(emit_extends(basic_type, new Stack([interface_declaration]))).toMatchSnapshot();
});
