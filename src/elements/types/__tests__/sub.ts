jest.unmock('../sub');

import {BasicType} from '../basic';
import {SubType} from '../sub';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new SubType({target: new BasicType({name: 'A'})}).emit()).toMatchSnapshot();
  });
});
