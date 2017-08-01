import { emit } from '../../emit';
import {
  create_triple_slash_reference,
  is_triple_slash_reference,
} from '../triple-slash-reference';

it('should return correctly with path', () => {
  expect(
    emit(
      create_triple_slash_reference({
        path: 'path/to/somewhere',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with types', () => {
  expect(
    emit(
      create_triple_slash_reference({
        types: 'some-module',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_triple_slash_reference', () => {
  it('should return correctly', () => {
    const element = create_triple_slash_reference({
      path: 'path/to/somewhere',
    });
    expect(is_triple_slash_reference(element)).toBe(true);
  });
});
