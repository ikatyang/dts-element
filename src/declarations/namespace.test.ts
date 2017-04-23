import { NamespaceDeclaration } from './namespace';

describe('#emit()', () => {
  it('should return formatted namespace', () => {
    const a_namespace = new NamespaceDeclaration({ name: 'Test', jsdoc: 'Line 1\nLine 2' });
    expect(a_namespace.emit()).toMatchSnapshot();
  });
});
