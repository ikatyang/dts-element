import { emit } from '../../emit';
import {
  create_export_namespace,
  is_export_namespace,
} from '../export-namespace';

it('should return correctly with name', () => {
  expect(
    emit(
      create_export_namespace({
        name: 'XYZ',
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_export_namespace', () => {
  it('should return correctly', () => {
    const element = create_export_namespace({
      name: 'XYZ',
    });
    expect(is_export_namespace(element)).toBe(true);
  });
});
