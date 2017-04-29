jest.unmock('../interface');

import {InterfaceType} from '../interface';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new InterfaceType({owned: 'Test'}).emit()).toMatchSnapshot();
  });
});
