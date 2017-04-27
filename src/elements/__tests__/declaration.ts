jest.unmock('../declaration');

import {AnyDeclaration, Declaration} from '../declaration';

const create_declaration = (parameters: any): AnyDeclaration =>
  Object.assign(Object.create(Declaration.prototype), {parameters});

describe('#jsdoc', () => {
  it('should return emit-jsdoc while jsdoc is empty', () => {
    const empty_string = '';
    const declaration = create_declaration({jsdoc: empty_string});
    expect(declaration.jsdoc).toBe('[emit-jsdoc]');
  });
  it('should return emit-jsdoc with trailing breakline while jsdoc is non-empty ', () => {
    const non_empty_string = 'non-empty';
    const declaration = create_declaration({jsdoc: non_empty_string});
    expect(declaration.jsdoc).toBe('[emit-jsdoc]\n');
  });
});
