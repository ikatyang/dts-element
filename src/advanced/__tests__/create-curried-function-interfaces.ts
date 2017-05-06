jest.disableAutomock();

import {Document} from '../../elements/document';
import {BasicType} from '../../elements/types/basic-type';
import {create_curried_function_interfaces} from '../create-curried-function-interfaces';

it('should return correctly without placeholder', () => {
  const interfaces = create_curried_function_interfaces({max_curry_level: 3});
  const document = new Document({children: interfaces});
  expect(document.emit()).toMatchSnapshot();
});

it('should return correctly with placeholder', () => {
  const placeholder = new BasicType({name: 'PH'});
  const interfaces = create_curried_function_interfaces({max_curry_level: 3, placeholder});
  const document = new Document({children: interfaces});
  expect(document.emit()).toMatchSnapshot();
});
