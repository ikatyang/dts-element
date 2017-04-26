jest.unmock('../interface');

import {VariableDeclaration} from '../../declarations/variable';
import {InterfaceMember} from '../interface';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'x';
    const owned = new VariableDeclaration({name});
    const readonly = true;
    const an_interface = new InterfaceMember({owned, readonly});
    expect(an_interface.emit()).toBe(`readonly [VariableDeclaration ${name}]`);
  });
});
