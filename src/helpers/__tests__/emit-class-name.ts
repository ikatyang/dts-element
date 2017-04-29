jest.unmock('../emit-class-name.ts');

import {ClassDeclaration} from '../../elements/declarations/class';
import {emit_class_name} from '../emit-class-name';

const name = 'Test';

it('should return correctly while class is a string', () => {
  expect(emit_class_name(name)).toBe(name);
});

it('should return correctly while class is a ClassDeclaration', () => {
  const class_declaration = new ClassDeclaration({name});
  expect(emit_class_name(class_declaration)).toBe(name);
});
