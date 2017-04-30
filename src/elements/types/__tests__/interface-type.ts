jest.unmock('../interface-type');

import {InterfaceType} from '../interface-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceType({owned: 'Test'}).emit()).toMatchSnapshot();
  });
});
