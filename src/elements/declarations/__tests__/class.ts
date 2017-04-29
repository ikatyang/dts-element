jest.unmock('../class');

import {ClassDeclaration} from '../class';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new ClassDeclaration({name: 'Test'}).emit()).toMatchSnapshot();
  });
});
