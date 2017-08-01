import { emit } from '../../emit';
import { create_general_type } from '../general-type';
import { create_keyof_type, is_keyof_type } from '../keyof-type';

it('should return correctly', () => {
  expect(
    emit(
      create_keyof_type({
        type: create_general_type({ name: 'T' }),
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_keyof_type', () => {
  it('should return correctly', () => {
    const element = create_keyof_type({
      type: create_general_type({ name: 'T' }),
    });
    expect(is_keyof_type(element)).toBe(true);
  });
});
