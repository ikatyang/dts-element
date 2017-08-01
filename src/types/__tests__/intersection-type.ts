import { number_type, string_type } from '../../constants';
import { emit } from '../../emit';
import {
  create_intersection_type,
  is_intersection_type,
} from '../intersection-type';

it('should return correctly', () => {
  expect(
    emit(
      create_intersection_type({
        types: [string_type, number_type],
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_intersection_type', () => {
  it('should return correctly', () => {
    const element = create_intersection_type({
      types: [string_type, number_type],
    });
    expect(is_intersection_type(element)).toBe(true);
  });
});
