jest.unmock('../emit-extends');

import {InterfaceDeclaration} from '../../elements/declarations/interface';
import {BasicType} from '../../elements/types/basic';
import {emit_extends} from '../emit-extends';

const name = 'A';
const basic_type = new BasicType({name});
const interface_declaration: InterfaceDeclaration = Object.create(InterfaceDeclaration.prototype);

it('should return empty string while extends is null', () => {
  expect(emit_extends(null, interface_declaration)).toBe('');
});

it('should return empty string while container is not InterfaceDeclaration', () => {
  expect(emit_extends(basic_type, null)).toBe('');
});

it('should return extends with emitted type while extends is not null and container is InterfaceDeclaration', () => {
  expect(emit_extends(basic_type, interface_declaration)).toMatchSnapshot();
});
