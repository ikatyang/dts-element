jest.unmock('../module-declaration');

import {ModuleDeclaration} from '../module-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ModuleDeclaration({name: 'A'}).emit()).toMatchSnapshot();
  });
});
