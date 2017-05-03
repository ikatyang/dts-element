jest.unmock('../typeof-type');

import {VariableDeclaration} from '../../declarations/variable-declaration';
import {TypeofType} from '../typeof-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new TypeofType({
      owned: new VariableDeclaration({name: 'test'}),
    }).emit()).toMatchSnapshot();
  });
});
