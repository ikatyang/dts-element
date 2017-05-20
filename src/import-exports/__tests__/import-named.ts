import {emit} from '../../emit';
import {create_import_member} from '../../members/import-member';
import {create_import_named} from '../import-named';

it('should return correctly with from', () => {
  expect(emit(
    create_import_named({
      from: 'path/to/somewhere',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with from, default', () => {
  expect(emit(
    create_import_named({
      from: 'path/to/somewhere',
      default: 'abc',
    }),
  )).toMatchSnapshot();
});

it('should return correctly with from, members', () => {
  expect(emit(
    create_import_named({
      from: 'path/to/somewhere',
      members: [
        create_import_member({name: 'a'}),
        create_import_member({name: 'b'}),
      ],
    }),
  )).toMatchSnapshot();
});

it('should return correctly with from, default, members', () => {
  expect(emit(
    create_import_named({
      from: 'path/to/somewhere',
      default: 'abc',
      members: [
        create_import_member({name: 'a'}),
        create_import_member({name: 'b'}),
      ],
    }),
  )).toMatchSnapshot();
});
