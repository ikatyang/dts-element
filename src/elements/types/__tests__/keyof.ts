jest.unmock('../keyof');

import {BasicType} from '../basic';
import {KeyofType} from '../keyof';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new KeyofType({
      owned: new BasicType({name: 'Test'}),
    }).emit()).toMatchSnapshot();
  });
});
