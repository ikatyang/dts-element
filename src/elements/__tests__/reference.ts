jest.unmock('../reference');

import {ReferenceKind} from '../../constants';
import {Reference} from '../reference';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new Reference({
      kind: ReferenceKind.PATH,
      value: '/path/to/declaration.d.ts',
    }).emit()).toMatchSnapshot();
  });
});
