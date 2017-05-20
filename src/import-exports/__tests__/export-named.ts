import {emit} from '../../emit';
import {create_export_member} from '../../members/export-member';
import {create_export_named} from '../export-named';

it('should return correctly with members', () => {
  expect(emit(
    create_export_named({
      members: [
        create_export_member({name: 'abc'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with members, from', () => {
  expect(emit(
    create_export_named({
      members: [
        create_export_member({name: 'abc'}),
      ],
      from: 'path/to/somewhere',
    }),
  )).toMatchSnapshot();
});
