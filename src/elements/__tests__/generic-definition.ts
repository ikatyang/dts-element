jest.unmock('../generic-definition');

import {GenericDefinition} from '../generic-definition';
import {GenericType} from '../types/generic-type';

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new GenericDefinition({owned: new GenericType({name: 'T'})}).emit()).toMatchSnapshot();
  });
});
