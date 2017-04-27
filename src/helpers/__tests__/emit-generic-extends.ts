jest.unmock('../emit-generic-extends');

import {InterfaceDeclaration} from '../../elements/declarations/interface';
import {BasicType} from '../../elements/types/basic';
import {emit_generic_extends} from '../emit-generic-extends';

const name = 'A';
const basic_type = new BasicType({name});
const interface_declaration = Object.create(InterfaceDeclaration.prototype);

it('should return empty string while extends is null', () => {
  expect(emit_generic_extends(null, interface_declaration)).toBe('');
});

it('should return empty string while container is not InterfaceDeclaration', () => {
  expect(emit_generic_extends(basic_type, null)).toBe('');
});

it('should return extends with emitted type while extends is not null and container is InterfaceDeclaration', () => {
  expect(emit_generic_extends(basic_type, interface_declaration)).toBe(` extends [BasicType ${name}]`);
});
