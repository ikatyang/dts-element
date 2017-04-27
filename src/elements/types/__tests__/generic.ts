jest.unmock('../generic');

import {InterfaceDeclaration} from '../../declarations/interface';
import {BasicType} from '../basic';
import {GenericType} from '../generic';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new GenericType({
      name: 'T',
      extends: new BasicType({name: 'A'}),
      default: new BasicType({name: 'B'}),
    }).emit()).toMatchSnapshot();
  });
});

describe('#_emit()', () => {
  describe('InterfaceDeclaration', () => {
    const container = Object.create(InterfaceDeclaration.prototype);
    it('should return correctly with extends and default', () => {
      expect(new GenericType({
        name: 'T',
        extends: new BasicType({name: 'A'}),
        default: new BasicType({name: 'B'}),
      })._emit(container)).toMatchSnapshot();
    });
    it('should return correctly without extends and default', () => {
      expect(new GenericType({name: 'T'})._emit(container)).toMatchSnapshot();
    });
  });
});
