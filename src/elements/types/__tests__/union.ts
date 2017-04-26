jest.unmock('../union');

import {BasicType} from '../basic';
import {UnionType} from '../union';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name_a = 'A';
    const name_b = 'B';
    expect(new UnionType({types: [
      new BasicType({name: name_a}),
      new BasicType({name: name_b}),
    ]}).emit()).toBe(`([BasicType ${name_a}] | [BasicType ${name_b}])`);
  });
});
