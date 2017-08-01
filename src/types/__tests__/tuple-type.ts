import { number_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_tuple_type, is_tuple_type } from '../tuple-type';

it('should return correctly', () => {
  expect(
    emit(
      create_tuple_type({
        types: [string_type, number_type],
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_tuple_type', () => {
  it('should return correctly', () => {
    const element = create_tuple_type({
      types: [string_type, number_type],
    });
    expect(is_tuple_type(element)).toBe(true);
  });
});
