jest.unmock('../export-as-namespace');

import {ExportAsNamespace} from '../export-as-namespace';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'test';
    expect(new ExportAsNamespace({name}).emit()).toBe(`export as namespace ${name};`);
  });
});
