jest.unmock('../generic');

import {BasicType} from '../basic';
import {GenericType} from '../generic';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new GenericType({
      name: 'T',
      extends: new BasicType({name: 'A'}),
      default: new BasicType({name: 'B'}),
    }).emit()).toMatchSnapshot();
  });
});
