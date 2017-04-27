jest.unmock('../union');

import {BasicType} from '../basic';
import {UnionType} from '../union';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new UnionType({types: [
      new BasicType({name: 'A'}),
      new BasicType({name: 'B'}),
    ]}).emit()).toMatchSnapshot();
  });
});
