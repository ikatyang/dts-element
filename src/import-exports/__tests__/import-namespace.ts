import { emit } from '../../emit';
import {
  create_import_namespace,
  is_import_namespace,
} from '../import-namespace';

it('should return correctly with from, name', () => {
  expect(
    emit(
      create_import_namespace({
        from: 'path/to/somewhere',
        name: 'ns',
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with from, name, default', () => {
  expect(
    emit(
      create_import_namespace({
        from: 'path/to/somewhere',
        name: 'ns',
        default: 'abc',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_import_namespace', () => {
  it('should return correctly', () => {
    const element = create_import_namespace({
      from: 'path/to/somewhere',
      name: 'ns',
    });
    expect(is_import_namespace(element)).toBe(true);
  });
});
