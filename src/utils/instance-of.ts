export interface IConstructor<T> {
  new(...args: any[]): T;
}

// tslint:disable-next-line:typedef
export const instance_of = <T>(constructors: IConstructor<T>[]) =>
  (element: T, index: number): boolean =>
    element instanceof constructors[index];
