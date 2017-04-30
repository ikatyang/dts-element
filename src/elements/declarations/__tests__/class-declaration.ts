jest.unmock('../class-declaration');

import {ClassDeclaration} from '../class-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ClassDeclaration({name: 'Test'}).emit()).toMatchSnapshot();
  });
});
