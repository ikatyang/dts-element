jest.unmock('../tuple-type');

import {BasicType} from '../basic-type';
import {TupleType} from '../tuple-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TupleType({types: [
      new BasicType({name: 'A'}),
      new BasicType({name: 'B'}),
    ]}).emit()).toMatchSnapshot();
  });
});
