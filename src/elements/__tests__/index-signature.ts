jest.unmock('../index-signature');

import {IndexSignature} from '../index-signature';
import {BasicType} from '../types/basic';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new IndexSignature({
      name: 'index',
      kind: 'string',
      type: new BasicType({name: 'A'}),
      optional: true,
    }).emit()).toMatchSnapshot();
  });
});
