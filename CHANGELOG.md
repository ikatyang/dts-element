# Change Log

All changes to this project will be documented in this file.

> **Tags:**
> - 💥 [Breaking Change]
> - 🚀 [New Feature]
> - 🐛 [Bug Fix]
> - 📝 [Documentation]
> - 🏠 [Internal]
> - 💅 [Polish]

## Unreleased

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
