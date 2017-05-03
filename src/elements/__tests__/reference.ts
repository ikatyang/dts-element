jest.unmock('../reference');

import {ReferenceKinds} from '../../constants';
import {Reference} from '../reference';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new Reference({
      kind: ReferenceKinds.PATH,
      content: '/path/to/declaration.d.ts',
    }).emit()).toMatchSnapshot();
  });
});
