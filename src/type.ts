import {Element} from './element';

export type AnyType = Type<any, any>;

export abstract class Type<T, U> extends Element<T, U> {}
