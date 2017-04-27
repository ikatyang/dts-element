jest.unmock('../literal');

import {LiteralType} from '../literal';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new LiteralType({value: 'some-string'}).emit()).toMatchSnapshot();
  });
});
