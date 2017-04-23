import {Reference} from '../reference';

describe('#emit()', () => {
  it('should return formatted content', () => {
    const reference = new Reference({kind: 'path', content: 'something'});
    expect(reference.emit()).toBe('/// <reference path="something" />');
  });
});
