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
- parsable
  - parsing TypeScript syntax into `dts-element` using `dts.parse()`, useful for restructuring types

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

Code

```ts
import * as dts from 'dts-element';

const getThing = dts.create_function_declaration({
  name: 'getThing',
  type: dts.create_function_type({
    parameters: [
      dts.create_parameter_declaration({
        name: 'x',
        type: dts.number_type,
      }),
    ],
    return: dts.void_type,
  }),
}); // equivalent to dts.parse('function getThing(x: number): void;').members[0];

const MyInterface = dts.create_interface_declaration({
  name: 'MyInterface',
  jsdoc: 'This is my nice interface',
  type: dts.create_object_type({
    members: [
      dts.create_object_member({
        optional: true,
        owned: getThing,
      }),
    ],
  }),
});

const SomeNamespace = dts.create_namespace_declaration({
  name: 'SomeNamespace',
  members: [MyInterface],
});

console.log(dts.emit(
  dts.create_top_level_element({
    members: [SomeNamespace],
  }),
));
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
