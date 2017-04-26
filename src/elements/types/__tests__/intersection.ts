import {nullType, numberType} from '../../../constants';
import {IntersectionType} from '../intersection';

describe('#emit()', () => {
  it('should return emitted types join with &', () => {
    expect(new IntersectionType({types: [nullType, numberType]}).emit()).toBe('(null & number)');
  });
});
