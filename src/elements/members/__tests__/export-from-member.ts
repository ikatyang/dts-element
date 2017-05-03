jest.unmock('../export-from-member');

import {ExportFromMember} from '../export-from-member';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ExportFromMember({
      owned: 'x',
    }).emit()).toMatchSnapshot();
  });
});
