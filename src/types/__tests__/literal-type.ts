import { emit } from '../../emit';
import { create_literal_type } from '../literal-type';

it('should return correctly with boolean', () => {
  expect(
    emit(
      create_literal_type({
        value: true,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with number', () => {
  expect(
    emit(
      create_literal_type({
        value: 1,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with string', () => {
  expect(
    emit(
      create_literal_type({
        value: 'a',
      }),
    ),
  ).toMatchSnapshot();
});
