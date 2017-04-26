jest.unmock('../reference');

import {Reference} from '../reference';

describe('#emit()', () => {
  it('should return formatted content', () => {
    const kind = 'path';
    const content = 'something';
    const reference = new Reference({kind, content});
    expect(reference.emit()).toBe(`/// <reference ${kind}="${content}" />`);
  });
});
