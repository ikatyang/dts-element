import { number_type, string_type } from '../../constants';
import { emit } from '../../emit';
import { create_union_type } from '../union-type';

it('should return correctly', () => {
  expect(
    emit(
      create_union_type({
        types: [string_type, number_type],
      }),
    ),
  ).toMatchSnapshot();
});
