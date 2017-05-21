import {emit} from '../../emit';
import {create_typeof_type} from '../typeof-type';

it('should return correctly with value', () => {
  expect(emit(
    create_typeof_type({
      name: 'a',
    }),
  )).toMatchSnapshot();
});
