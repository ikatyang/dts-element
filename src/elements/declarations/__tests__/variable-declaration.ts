jest.unmock('../variable-declaration');

import {VariableKinds} from '../../../constants';
import {BasicType} from '../../types/basic-type';
import {VariableDeclaration} from '../variable-declaration';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new VariableDeclaration({name: 'a',
      kind: VariableKinds.CONST,
      type: new BasicType({name: 'B'}),
    }).emit()).toMatchSnapshot();
  });
});
