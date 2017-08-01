import { emit } from '../../emit';
import { create_export_default, is_export_default } from '../export-default';

it('should return correctly with value', () => {
  expect(
    emit(
      create_export_default({
        value: 'xyz',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with value, parents', () => {
  expect(
    emit(
      create_export_default({
        value: 'xyz',
        parents: ['a', 'b', 'c'],
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_export_default', () => {
  it('should return correctly', () => {
    const element = create_export_default({
      value: 'xyz',
    });
    expect(is_export_default(element)).toBe(true);
  });
});
