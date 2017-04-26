jest.unmock('../generic');

import {GenericType} from '../generic';

describe('.stringify()', () => {
  it('should return empty string while generics is empty', () => {
    expect(GenericType.stringify([], null)).toBe('');
  });
  it('should return joined string from emitted generics', () => {
    const name_a = 'T';
    const name_b = 'U';
    const generic_a = new GenericType({name: name_a});
    const generic_b = new GenericType({name: name_b});
    expect(GenericType.stringify([generic_a, generic_b], null)).toBe(`<${name_a}, ${name_b}>`);
  });
});

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'T';
    expect(new GenericType({name}).emit()).toBe(name);
  });
});
