jest.unmock('../instance-of');

import {instance_of} from '../instance-of';

// tslint:disable:max-classes-per-file

class A {}
class B {}

it('should return result correctly', () => {
  expect(instance_of([A])(new A(), 0)).toBe(true);
  expect(instance_of([A])(new B(), 0)).toBe(false);
  expect(instance_of([A, B])(new B(), 1)).toBe(true);
});
