import { create_general_type } from '..';
import { boolean_type, number_type, string_type } from '../../constants';
import { emit } from '../../emit';
import {
  create_conditional_type,
  is_conditional_type,
} from '../conditional-type';

it('should return correctly', () => {
  expect(
    emit(
      create_conditional_type({
        check: create_general_type({ name: 'T' }),
        extends: string_type,
        true: boolean_type,
        false: number_type,
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_conditional_type', () => {
  it('should return correctly', () => {
    const element = create_conditional_type({
      check: create_general_type({ name: 'T' }),
      extends: string_type,
      true: boolean_type,
      false: number_type,
    });
    expect(is_conditional_type(element)).toBe(true);
  });
});
