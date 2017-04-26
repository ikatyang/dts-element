import {IntersectionType} from '../intersection';
import {nullType, numberType} from '../../constants';

describe('#emit()', () => {
  it('should return emitted types join with &', () => {
    expect(new IntersectionType({types: [nullType, numberType]}).emit()).toBe('(null & number)');
  });
});
