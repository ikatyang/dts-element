jest.unmock('../emit-generics');

import {GenericType} from '../../elements/types/generic-type';
import {emit_generics} from '../emit-generics';

it('should return empty string while generics is empty', () => {
  expect(emit_generics([], null)).toBe('');
});

it('should return joined string from emitted generics', () => {
  expect(emit_generics([
    new GenericType({name: 'T'}),
    new GenericType({name: 'U'}),
  ], null)).toMatchSnapshot();
});
