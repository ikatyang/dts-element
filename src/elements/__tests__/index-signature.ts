jest.unmock('../index-signature');

import {IndexSignature} from '../index-signature';
import {BasicType} from '../types/basic';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new IndexSignature({
      name: 'key',
      type: new BasicType({name: 'X'}),
    }).emit()).toMatchSnapshot();
  });
});
