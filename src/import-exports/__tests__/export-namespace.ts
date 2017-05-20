import {emit} from '../../emit';
import {create_export_namespace} from '../export-namespace';

it.skip('should return correctly with name', () => {
  expect(emit(
    create_export_namespace({
      name: 'XYZ',
    }),
  )).toMatchSnapshot();
});
