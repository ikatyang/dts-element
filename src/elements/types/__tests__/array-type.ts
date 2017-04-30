jest.unmock('../array-type');

import {ArrayType} from '../array-type';
import {BasicType} from '../basic-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ArrayType({
      owned: new BasicType({name: 'Test'}),
    }).emit()).toMatchSnapshot();
  });
});
