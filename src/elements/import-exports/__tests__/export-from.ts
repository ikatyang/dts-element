jest.unmock('../export-from');

import {ExportFromMember} from '../../members/export-from-member';
import {ExportFrom} from '../export-from';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ExportFrom({
      from: 'path/to/somewhere',
      members: [
        new ExportFromMember({owned: 'v1'}),
        new ExportFromMember({owned: 'v2'}),
      ],
    }).emit()).toMatchSnapshot();
  });
});
