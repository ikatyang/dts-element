jest.unmock('../import-all');

import {ImportAll} from '../import-all';

describe('#emit()', () => {
  it('should return correctly', () => {
    const from = '../../example';
    expect(new ImportAll({from}).emit()).toBe(`import "${from}";`);
  });
});
