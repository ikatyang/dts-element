jest.unmock('../emit-generic-default');

import {InterfaceDeclaration} from '../../elements/declarations/interface-declaration';
import {BasicType} from '../../elements/types/basic-type';
import {emit_generic_default} from '../emit-generic-default';

const name = 'A';
const basic_type = new BasicType({name});
const interface_declaration: InterfaceDeclaration = Object.create(InterfaceDeclaration.prototype);

it('should return empty string while default is null', () => {
  expect(emit_generic_default(null, interface_declaration)).toBe('');
});

it('should return empty string while container is not InterfaceDeclaration', () => {
  expect(emit_generic_default(basic_type, null)).toBe('');
});

it('should return default with emitted type while default is not null and container is InterfaceDeclaration', () => {
  expect(emit_generic_default(basic_type, interface_declaration)).toMatchSnapshot();
});
