# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.3.1"></a>
## [2.3.1](https://github.com/ikatyang/dts-element/compare/v2.3.0...v2.3.1) (2018-05-07)


### Bug Fixes

* **types:** expose conditional type and infer type ([#97](https://github.com/ikatyang/dts-element/issues/97)) ([aa3e0fe](https://github.com/ikatyang/dts-element/commit/aa3e0fe))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/ikatyang/dts-element/compare/v2.2.1...v2.3.0) (2018-04-09)


### Bug Fixes

* **deps:** update dependency typescript to ~2.8.1 ([#92](https://github.com/ikatyang/dts-element/issues/92)) ([da54ddc](https://github.com/ikatyang/dts-element/commit/da54ddc))


### Features

* support conditional type and infer type ([#94](https://github.com/ikatyang/dts-element/issues/94)) ([31c9e19](https://github.com/ikatyang/dts-element/commit/31c9e19))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/ikatyang/dts-element/compare/v2.2.0...v2.2.1) (2017-08-12)


### Bug Fixes

* **deps:** lock typescript at v2.4.x to prevent breaking changes in the future ([8a8d257](https://github.com/ikatyang/dts-element/commit/8a8d257))
* **sub-type:** should transform correctly ([#33](https://github.com/ikatyang/dts-element/issues/33)) ([a64b8f9](https://github.com/ikatyang/dts-element/commit/a64b8f9))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/ikatyang/dts-element/compare/v2.1.0...v2.2.0) (2017-08-02)


### Features

* **emit:** support `TopLevelMember[]` ([#22](https://github.com/ikatyang/dts-element/issues/22)) ([2dbad1d](https://github.com/ikatyang/dts-element/commit/2dbad1d))
* **utils:** add `parse_type()` ([#21](https://github.com/ikatyang/dts-element/issues/21)) ([ae0192f](https://github.com/ikatyang/dts-element/commit/ae0192f))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/ikatyang/dts-element/compare/v2.0.5...v2.1.0) (2017-08-01)


### Features

* **EnumDeclaration:** support `const` option ([#20](https://github.com/ikatyang/dts-element/issues/20)) ([024cbf9](https://github.com/ikatyang/dts-element/commit/024cbf9))
* **utils:** add type guards ([#19](https://github.com/ikatyang/dts-element/issues/19)) ([79de10c](https://github.com/ikatyang/dts-element/commit/79de10c))



## v2.0.5 (2017-06-26)

#### 🐛 Bug Fix
- add missing `ImportEqual` ( `import a = require('b')` )
- `parse()`
  - support `ts.ImportEqualsDeclaration`

## v2.0.4 (2017-06-13)

#### 🏠 Internal
- Upgrade typescript@^2.4.0

## v2.0.3 (2017-06-07)

#### 🐛 Bug Fix
- `parse()`
  - support `ts.FunctionDeclaration`

## v2.0.2 (2017-05-26)

#### 🐛 Bug Fix
- `parse()`
  - support `ts.ParenthesizedTypeNode`

## v2.0.1 (2017-05-25)

#### 🐛 Bug Fix
- `ClassMember`, `ObjectMember`
  - support string-literal name

## v2.0.0 (2017-05-24)

#### 💥 Breaking Change
- package
  - all elements are pure object now
  - use `dts.emit(dts_element)` instead of `dts_element.emit()`
  - use `dts.create_element(options)` instead of `new dts.Element(options)`
- advanced
  - remove curry-relative functions since it should not be a part of DOM library

#### 🚀 New Feature
- comments
  - support `single-line-comment` and `multi-line-comment` element, or using `comments` field in every element
- parsers
  - support parsing TypeScript syntax into `dts-element` ( `dts.parse()` ), useful for restructuring types

#### 🏠 Internal
- package
  - rewrite using TypeScript Printer API

## v1.3.0 (2017-05-10)

#### 🚀 New Feature
- advanced
  - add `create_various_curried_function_types()`: for functional-programming types with deep generics and various version

#### 🐛 Bug Fix
- advanced
  - fix `create_curried_function_types/interfaces()`: fix the overloads' ordering for better correctness.

## v1.2.1 (2017-05-09)

#### 🐛 Bug Fix
- package
  - fix missing `lib` folders

## v1.2.0 (2017-05-09)

#### 🚀 New Feature
- advanced
  - enhance `create_curried_function_types()`: add options to generate selectable types

## v1.1.0 (2017-05-08)

#### 🚀 New Feature
- `Element`
  - add `#equal()` for comparing
  - add `#has()` for checking existence of specific element in its parameters
- advanced
  - add `create_curried_function_interfaces()` for functional-programming types
  - add `create_curried_function_types()` for functional-programming types with deep generics

#### 📝 Documentation
- Fix npm badge url

## v1.0.0 (2017-05-04)

#### 🚀 New Feature
- Release first version
