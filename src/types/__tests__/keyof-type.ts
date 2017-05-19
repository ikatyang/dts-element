import {emit} from '../../emit';
import {create_generic_type} from '../generic-type';
import {create_keyof_type} from '../keyof-type';

it('should return correctly', () => {
  expect(emit(
    create_keyof_type({
      type: create_generic_type({name: 'T'}),
    }),
  )).toMatchSnapshot();
});
