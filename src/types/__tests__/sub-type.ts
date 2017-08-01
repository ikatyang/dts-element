import { any_type, number_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_sub_type, is_sub_type } from '../sub-type';

it('should return correctly', () => {
  expect(
    emit(
      create_sub_type({
        types: [any_type, string_type, number_type],
      }),
    ),
  ).toMatchSnapshot();
});

it('should throw error with types (length < 2)', () => {
  expect(() =>
    emit(
      create_sub_type({
        types: [],
      }),
    ),
  ).toThrowError();
});

describe('is_sub_type', () => {
  it('should return correctly', () => {
    const element = create_sub_type({
      types: [any_type, string_type, number_type],
    });
    expect(is_sub_type(element)).toBe(true);
  });
});
