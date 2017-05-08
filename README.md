# dts-element

[![npm](https://img.shields.io/npm/v/dts-element.svg)](https://www.npmjs.com/package/dts-element)
[![build](https://img.shields.io/travis/ikatyang/dts-element/master.svg)](https://travis-ci.org/ikatyang/dts-element/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/dts-element.svg)](https://codecov.io/gh/ikatyang/dts-element)

A DOM library for generation TypeScript declaration (.d.ts) files

[Changelog](https://github.com/ikatyang/dts-element/blob/master/CHANGELOG.md) - [Examples](https://github.com/ikatyang/dts-element/tree/master/tests/) - [Documentation](https://ikatyang.github.io/dts-element/)

## Features

- reusable
  - `FunctionDeclaration`: it can be method or function based on where it is.
  - `VariableDeclaration`: it can be property or variable based on where it is.
- clonable
  - `element.clone(is_deep_clone: boolean = false)`
  - `element.copy(element: Element, is_deep_copy: boolean = false)`
- advanced
  - `create_curried_function_interfaces()`
  - `create_curried_function_types()` [[example](#curried-function-types)]

## Installation

using npm

```sh
npm install --save dts-element
```

using yarn

```sh
yarn add dts-element
```

## Usage

#### normal

Sample

```ts
import * as dts from 'dts-element';

const interface_MyInterface = new dts.InterfaceDeclaration({
  name: 'MyInterface',
  jsdoc: 'This is my nice interface',
  members: [
    new dts.ObjectMember({
      owned: new dts.FunctionDeclaration({
        name: 'getThing',
        optional: true,
        type: new dts.FunctionType({
          parameters: [
            new dts.Parameter({
              name: 'x',
              type: dts.number_type,
            }),
          ],
          return: dts.void_type,
        }),
      }),
    }),
  ],
});

const namespace_SomeNamespace = new dts.NamespaceDeclaration({
  name: 'SomeNamespace',
  children: [interface_MyInterface],
});

const doucment = new dts.Document({
  children: [namespace_SomeNamespace],
});

console.log(doucment.emit());
```

Output

```ts
declare namespace SomeNamespace {
  /**
   * This is my nice interface
   */
  interface MyInterface {
    getThing?(x: number): void;
  }
}
```

#### curried-function-types

Sample

```ts
import * as dts from 'dts-element';

const name = 'adjust';
const placeholder = new dts.BasicType({name: 'PH'});

const generic_T = new dts.GenericType({name: 'T'});
const generic_U = new dts.GenericType({name: 'U'});

// <T, U>(fn: (v: T) => U, index: number, array: T[]) => (T | U)[]
const function_type = new dts.FunctionType({
  generics: [generic_T, generic_U],
  parameters: [
    new dts.Parameter({
      name: 'fn',
      type: new dts.FunctionType({
        parameters: [
          new dts.Parameter({name: 'v', type: generic_T}),
        ],
        return: generic_U,
      }),
    }),
    new dts.Parameter({name: 'index', type: dts.number_type}),
    new dts.Parameter({name: 'array', type: new dts.ArrayType({owned: generic_T})}),
  ],
  return: new dts.ArrayType({owned: new dts.UnionType({types: [generic_T, generic_U]})}),
});

const types = dts.create_curried_function_types({name, type: function_type, placeholder});
const document = new dts.Document({children: types});

console.log(document.emit());
```

Output

```ts
type adjust = adjust_000;
type adjust_000 = {
  <T, U>(fn: (v: T) => U, index: number, array: T[]): adjust_111<T, U>;
  <T, U>(fn: (v: T) => U, _index: PH, array: T[]): adjust_101<T, U>;
  <T>(_fn: PH, index: number, array: T[]): adjust_011<T>;
  <T>(_fn: PH, _index: PH, array: T[]): adjust_001<T>;
  <T, U>(fn: (v: T) => U, index: number): adjust_110<T, U>;
  (_fn: PH, index: number): adjust_010;
  <T, U>(fn: (v: T) => U): adjust_100<T, U>;
};
type adjust_001<T> = {
  <U>(fn: (v: T) => U, index: number): adjust_111<T, U>;
  (_fn: PH, index: number): adjust_011<T>;
  <U>(fn: (v: T) => U): adjust_101<T, U>;
};
type adjust_010 = {
  <T, U>(fn: (v: T) => U, array: T[]): adjust_111<T, U>;
  <T>(_fn: PH, array: T[]): adjust_011<T>;
  <T, U>(fn: (v: T) => U): adjust_110<T, U>;
};
type adjust_011<T> = {
  <U>(fn: (v: T) => U): adjust_111<T, U>;
};
type adjust_100<T, U> = {
  (index: number, array: T[]): adjust_111<T, U>;
  (_index: PH, array: T[]): adjust_101<T, U>;
  (index: number): adjust_110<T, U>;
};
type adjust_101<T, U> = {
  (index: number): adjust_111<T, U>;
};
type adjust_110<T, U> = {
  (array: T[]): adjust_111<T, U>;
};
type adjust_111<T, U> = (T | U)[];
```

## Development

```sh
# test
yarn run test

# test with coverage
yarn run test-coverage

# build
yarn run build

# lint
yarn run lint

# generate documentation
yarn run typedoc
```

## Related

- [dts-dom](https://github.com/RyanCavanaugh/dts-dom): another dts DOM library from TS team member
