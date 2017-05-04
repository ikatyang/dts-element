# dts-element

[![npm](https://img.shields.io/npm/v/ts-element.svg)](https://www.npmjs.com/package/dts-element)
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
