import {GenericType} from '../../elements/types/generic';
import {genericify} from '../genericify';

it('should return empty string while generics is empty', () => {
  expect(genericify([], null)).toBe('');
});

it('should return joined string from emitted generics', () => {
  const name_a = 'T';
  const name_b = 'U';
  const generic_a = new GenericType({name: name_a});
  const generic_b = new GenericType({name: name_b});
  expect(genericify([generic_a, generic_b], null)).toBe(`<[GenericType ${name_a}], [GenericType ${name_b}]>`);
});
