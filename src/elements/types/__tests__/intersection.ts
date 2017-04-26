jest.unmock('../intersection');

import {BasicType} from '../basic';
import {IntersectionType} from '../intersection';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new IntersectionType({types: [
      new BasicType({name: 'A'}),
      new BasicType({name: 'B'}),
    ]}).emit()).toBe('([BasicType A] & [BasicType B])');
  });
});
