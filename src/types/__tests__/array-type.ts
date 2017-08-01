import { string_type } from '../../constants';
import { emit } from '../../emit';
import { create_array_type, is_array_type } from '../array-type';

it('should return correctly', () => {
  expect(
    emit(
      create_array_type({
        type: string_type,
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_array_type', () => {
  it('should return correctly', () => {
    const element = create_array_type({
      type: string_type,
    });
    expect(is_array_type(element)).toBe(true);
  });
});
