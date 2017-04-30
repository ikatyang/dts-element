jest.unmock('../class-type');

import {ClassType} from '../class-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ClassType({owned: 'Test'}).emit()).toMatchSnapshot();
  });
});
