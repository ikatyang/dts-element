import { Document } from '../document';
import { NamespaceDeclaration } from '../declarations/namespace';

describe('#emit()', () => {
  it('should return formatted .d.ts content', () => {
    const elements = [
      new NamespaceDeclaration({ name: 'A' }),
      new NamespaceDeclaration({ name: 'B' }),
    ];
    const document = new Document({ elements });
    expect(document.emit()).toMatchSnapshot();
  });
});
