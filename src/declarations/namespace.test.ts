import { Namespace } from './namespace';

describe('#emit()', () => {
  it('should return formatted namespace', () => {
    const a_namespace = new Namespace({ name: 'Test', jsdoc: 'Line 1\nLine 2' });
    expect(a_namespace.emit()).toMatchSnapshot();
  });
});
