jest.unmock('../export-all');

import {ExportAll} from '../export-all';

describe('#emit()', () => {
  it('should return correctly', () => {
    const from = '../../example';
    expect(new ExportAll({from}).emit()).toBe(`export * from "${from}";`);
  });
});
