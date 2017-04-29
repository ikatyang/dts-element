jest.unmock('../emit-declaration-type-name.ts');

import {ClassDeclaration} from '../../elements/declarations/class';
import {emit_declaration_type_name} from '../emit-declaration-type-name';

const name = 'Test';

it('should return correctly while class is a string', () => {
  expect(emit_declaration_type_name(name)).toBe(name);
});

it('should return correctly while class is a ClassDeclaration', () => {
  const class_declaration = new ClassDeclaration({name});
  expect(emit_declaration_type_name(class_declaration)).toBe(name);
});
