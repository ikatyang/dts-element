jest.unmock('../parameter');

import {Parameter} from '../parameter';
import {BasicType} from '../types/basic-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new Parameter({
      name: 'param',
      type: new BasicType({name: 'Param'}),
    }).emit()).toMatchSnapshot();
  });
});
