jest.unmock('../declaration');

import {AnyDeclaration, Declaration} from '../declaration';

const create_declaration = (parameters: any): AnyDeclaration =>
  Object.assign(Object.create(Declaration.prototype), {parameters});

describe('#jsdoc', () => {
  it('should return empty string while jsdoc is empty', () => {
    const declaration = create_declaration({jsdoc: ''});
    expect(declaration.jsdoc).toBe('');
  });
  it('should return string with trailing breakline while jsdoc is non-empty ', () => {
    const declaration = create_declaration({jsdoc: 'line 1\nline 2\nline 3'});
    expect(declaration.jsdoc).toMatch(/\n$/);
  });
});
