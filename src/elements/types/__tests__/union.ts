jest.unmock('../union');

import {BasicType} from '../basic';
import {UnionType} from '../union';

describe('#emit()', () => {
  it('should return emitted types join with |', () => {
    expect(new UnionType({types: [
      new BasicType({name: 'A'}),
      new BasicType({name: 'B'}),
    ]}).emit()).toBe('([BasicType A] | [BasicType B])');
  });
});
