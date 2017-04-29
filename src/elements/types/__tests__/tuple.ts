jest.unmock('../tuple');

import {BasicType} from '../basic';
import {TupleType} from '../tuple';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TupleType({owneds: [
      new BasicType({name: 'A'}),
      new BasicType({name: 'B'}),
    ]}).emit()).toMatchSnapshot();
  });
});
