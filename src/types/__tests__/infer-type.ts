import { create_general_type } from '..';
import { create_generic_declaration } from '../..';
import { boolean_type, number_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_infer_type, is_infer_type } from '../infer-type';

it('should return correctly', () => {
  expect(
    emit(
      create_infer_type({
        generic: create_generic_declaration({ name: 'T' }),
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_infer_type', () => {
  it('should return correctly', () => {
    const element = create_infer_type({
      generic: create_generic_declaration({ name: 'T' }),
    });
    expect(is_infer_type(element)).toBe(true);
  });
});
