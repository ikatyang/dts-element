import {Element} from '../element';

/**
 * ```ts
 * type X = some_type;
 * //       ^^^^^^^^^
 * ```
 */
export abstract class Type<T extends object = any, U extends object = any> extends Element<T, U> {

  private _instance_of_type: true;

}
