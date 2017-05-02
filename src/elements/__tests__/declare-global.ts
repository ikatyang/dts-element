jest.unmock('../declare-global');

import {DeclareGlobal} from '../declare-global';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new DeclareGlobal({children: []}).emit()).toMatchSnapshot();
  });
});
