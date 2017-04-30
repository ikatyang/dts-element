jest.unmock('../keyof-type');

import {BasicType} from '../basic-type';
import {KeyofType} from '../keyof-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new KeyofType({
      owned: new BasicType({name: 'Test'}),
    }).emit()).toMatchSnapshot();
  });
});
