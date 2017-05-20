import {emit} from '../../emit';
import {create_general_type} from '../general-type';
import {create_keyof_type} from '../keyof-type';

it('should return correctly', () => {
  expect(emit(
    create_keyof_type({
      type: create_general_type({name: 'T'}),
    }),
  )).toMatchSnapshot();
});
