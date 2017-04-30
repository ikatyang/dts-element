jest.unmock('../sub-type');

import {BasicType} from '../basic-type';
import {SubType} from '../sub-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new SubType({target: new BasicType({name: 'A'})}).emit()).toMatchSnapshot();
  });
});
