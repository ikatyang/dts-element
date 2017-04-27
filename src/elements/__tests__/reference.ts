jest.unmock('../reference');

import {Reference} from '../reference';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new Reference({
      kind: 'path',
      content: '/path/to/declaration.d.ts',
    }).emit()).toMatchSnapshot();
  });
});
