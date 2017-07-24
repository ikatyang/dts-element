import { emit } from '../../emit';
import { create_export_equal } from '../export-equal';

it('should return correctly with value', () => {
  expect(
    emit(
      create_export_equal({
        value: 'xyz',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with value, parents', () => {
  expect(
    emit(
      create_export_equal({
        value: 'xyz',
        parents: ['a', 'b', 'c'],
      }),
    ),
  ).toMatchSnapshot();
});
