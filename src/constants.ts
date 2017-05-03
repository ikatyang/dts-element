import {BasicType} from './elements/types/basic-type';

export const any_type = new BasicType({name: 'any'});
export const never_type = new BasicType({name: 'never'});

export const null_type = new BasicType({name: 'null'});
export const undefined_type = new BasicType({name: 'undefined'});
export const void_type = new BasicType({name: 'void'});

export const boolean_type = new BasicType({name: 'boolean'});
export const number_type = new BasicType({name: 'number'});
export const string_type = new BasicType({name: 'string'});
export const symbol_type = new BasicType({name: 'symbol'});
export const object_type = new BasicType({name: 'object'});

export const this_type = new BasicType({name: 'this'});

export enum ParameterKinds {
  NONE,
  REST,
  OPTIONAL,
}

export enum ReferenceKinds {
  PATH,
  TYPES,
}

export const REFERENCE_KIND_MAP = {
  [ReferenceKinds.PATH]: 'path',
  [ReferenceKinds.TYPES]: 'types',
};

export enum VariableKinds {
  VAR,
  LET,
  CONST,
}

export const VARIABLE_KIND_MAP = {
  [VariableKinds.VAR]: 'var',
  [VariableKinds.LET]: 'let',
  [VariableKinds.CONST]: 'const',
};

export enum ClassAccessor {
  NONE,
  PUBLIC,
  PROTECTED,
  PRIVATE,
}

export const CLASS_ACCESSOR_MAP = {
  [ClassAccessor.PUBLIC]: 'public',
  [ClassAccessor.PROTECTED]: 'protected',
  [ClassAccessor.PRIVATE]: 'private',
};
