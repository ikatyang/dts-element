import { any_type, number_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_sub_type, is_sub_type } from '../sub-type';

it('should return correctly with object', () => {
  expect(
    emit(
      create_sub_type({
        object: string_type,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with object and index', () => {
  expect(
    emit(
      create_sub_type({
        object: create_sub_type({
          object: any_type,
          index: string_type,
        }),
        index: number_type,
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_sub_type', () => {
  it('should return correctly', () => {
    const element = create_sub_type({
      object: create_sub_type({
        object: any_type,
        index: string_type,
      }),
      index: number_type,
    });
    expect(is_sub_type(element)).toBe(true);
  });
});
