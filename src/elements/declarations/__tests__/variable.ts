jest.unmock('../variable');

import {BasicType} from '../../types/basic';
import {VariableDeclaration} from '../variable';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new VariableDeclaration({
      name: 'A',
      kind: 'const',
      type: new BasicType({name: 'B'}),
      optional: true,
    }).emit()).toMatchSnapshot();
  });
});
