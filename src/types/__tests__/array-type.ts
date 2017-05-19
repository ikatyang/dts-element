import {string_type} from '../../constants';
import {emit} from '../../emit';
import {create_array_type} from '../array-type';

it('should return correctly', () => {
  expect(emit(
    create_array_type({
      type: string_type,
    }),
  )).toMatchSnapshot();
});
