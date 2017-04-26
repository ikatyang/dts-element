import {nullType, numberType} from '../../../constants';
import {UnionType} from '../union';

describe('#emit()', () => {
  it('should return emitted types join with |', () => {
    expect(new UnionType({types: [nullType, numberType]}).emit()).toBe('(null | number)');
  });
});
