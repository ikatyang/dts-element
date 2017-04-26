jest.unmock('../intersection');

import {BasicType} from '../basic';
import {IntersectionType} from '../intersection';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name_a = 'A';
    const name_b = 'B';
    expect(new IntersectionType({types: [
      new BasicType({name: name_a}),
      new BasicType({name: name_b}),
    ]}).emit()).toBe(`([BasicType ${name_a}] & [BasicType ${name_b}])`);
  });
});
