import {UnionType} from '../union';
import {nullType, numberType} from '../../constants';

describe('#emit()', () => {
  it('should return emitted types join with |', () => {
    expect(new UnionType({types: [nullType, numberType]}).emit()).toBe('(null | number)');
  });
});
