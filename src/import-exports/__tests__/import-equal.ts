import { emit } from '../../emit';
import { create_import_equal, is_import_equal } from '../import-equal';

it('should return correctly with name and from', () => {
  expect(
    emit(
      create_import_equal({
        name: 'abc',
        from: 'xyz',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_import_equal', () => {
  it('should return correctly', () => {
    const element = create_import_equal({
      name: 'abc',
      from: 'xyz',
    });
    expect(is_import_equal(element)).toBe(true);
  });
});
