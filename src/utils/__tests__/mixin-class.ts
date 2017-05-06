import {mixin_class} from '../mixin-class';

// tslint:disable:max-classes-per-file prefer-function-over-method

const result = 'something';

class A {
  public get(): string {
    return result;
  }
}

class B implements A {
  public get: () => string;
}

mixin_class(B, [A]);

it('should mixin correctly', () => {
  expect(new B().get()).toBe(result);
});
