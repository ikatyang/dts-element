jest.unmock('../union-type');

import {BasicType} from '../basic-type';
import {UnionType} from '../union-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new UnionType({types: [
      new BasicType({name: 'A'}),
      new BasicType({name: 'B'}),
    ]}).emit()).toMatchSnapshot();
  });
});
