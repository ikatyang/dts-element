import {GenericType} from '../../elements/types/generic';
import {emit_generics} from '../emit-generics';

const container = null as any;

it('should return empty string while generics is empty', () => {
  expect(emit_generics([], container)).toBe('');
});

it('should return joined string from emitted generics', () => {
  const name_a = 'T';
  const name_b = 'U';
  const generic_a = new GenericType({name: name_a});
  const generic_b = new GenericType({name: name_b});
  expect(emit_generics([generic_a, generic_b], container)).toBe(`<[GenericType ${name_a}], [GenericType ${name_b}]>`);
});
