jest.unmock('../class');

import {ClassType} from '../class';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ClassType({owned: 'Test'}).emit()).toMatchSnapshot();
  });
});