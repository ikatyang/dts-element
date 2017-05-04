jest.unmock('../emit-generics');

import {GenericType} from '../../elements/types/generic-type';
import {Stack} from '../../stack';
import {emit_generics} from '../emit-generics';

it('should return empty string while generics is empty', () => {
  expect(emit_generics([], new Stack())).toBe('');
});

it('should return joined generic-types while generic is not GenericType or is_definition = false', () => {
  expect(emit_generics(
    [
      new GenericType({name: 'T'}),
      new GenericType({name: 'U'}),
    ],
    new Stack(),
  )).toMatchSnapshot();
});

it('should return joined generic-definitions while generic is GenericType and is_definition = true', () => {
  expect(emit_generics(
    [
      new GenericType({name: 'T'}),
      new GenericType({name: 'U'}),
    ],
    new Stack(),
    true,
  )).toMatchSnapshot();
});
