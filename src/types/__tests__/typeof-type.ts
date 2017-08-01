import { emit } from '../../emit';
import { create_typeof_type, is_typeof_type } from '../typeof-type';

it('should return correctly with value', () => {
  expect(
    emit(
      create_typeof_type({
        name: 'a',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_typeof_type', () => {
  it('should return correctly', () => {
    const element = create_typeof_type({
      name: 'a',
    });
    expect(is_typeof_type(element)).toBe(true);
  });
});
