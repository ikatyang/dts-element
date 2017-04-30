jest.unmock('../variable-declaration');

import {BasicType} from '../../types/basic-type';
import {VariableDeclaration} from '../variable-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new VariableDeclaration({name: 'a',
      kind: 'const',
      type: new BasicType({name: 'B'}),
    }).emit()).toMatchSnapshot();
  });
});
