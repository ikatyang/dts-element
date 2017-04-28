jest.unmock('../array');

import {ArrayType} from '../array';
import {BasicType} from '../basic';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ArrayType({
      owned: new BasicType({name: 'Test'}),
    }).emit()).toMatchSnapshot();
  });
});
