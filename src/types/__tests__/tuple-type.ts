import {number_type, string_type} from '../../constants';
import {emit} from '../../emit';
import {create_tuple_type} from '../tuple-type';

it('should return correctly', () => {
  expect(emit(
    create_tuple_type({
      types: [string_type, number_type],
    }),
  )).toMatchSnapshot();
});
