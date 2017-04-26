jest.unmock('../generic');

import {InterfaceDeclaration} from '../../declarations/interface';
import {BasicType} from '../basic';
import {GenericType} from '../generic';

describe('#emit()', () => {
  it('should return correctly', () => {
    const name = 'T';
    expect(new GenericType({
      name,
      extends: new BasicType({name: 'A'}),
      default: new BasicType({name: 'B'}),
    }).emit()).toBe(name);
  });
});

describe('#_emit()', () => {
  describe('InterfaceDeclaration', () => {
    const container = Object.create(InterfaceDeclaration.prototype);
    it('should return correctly with extends and default', () => {
      const name = 'T';
      const name_a = 'A';
      const name_b = 'B';
      expect(new GenericType({
        name,
        extends: new BasicType({name: name_a}),
        default: new BasicType({name: name_b}),
      })._emit(container)).toBe(`${name} extends [BasicType ${name_a}] = [BasicType ${name_b}]`);
    });
    it('should return correctly without extends and default', () => {
      const name = 'T';
      expect(new GenericType({name})._emit(container)).toBe(name);
    });
  });
});
