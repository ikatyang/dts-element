jest.unmock('../intersection-type');

import {BasicType} from '../basic-type';
import {IntersectionType} from '../intersection-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new IntersectionType({types: [
      new BasicType({name: 'A'}),
      new BasicType({name: 'B'}),
    ]}).emit()).toMatchSnapshot();
  });
});
