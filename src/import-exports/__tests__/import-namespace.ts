import {emit} from '../../emit';
import {create_import_namespace} from '../import-namespace';

it('should return correctly with from, name', () => {
  expect(emit(
    create_import_namespace({
      from: 'path/to/somewhere',
      name: 'ns',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with from, name, default', () => {
  expect(emit(
    create_import_namespace({
      from: 'path/to/somewhere',
      name: 'ns',
      default: 'abc',
    }),
  )).toMatchSnapshot();
});
