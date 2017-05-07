export const is_primitive = (value: any): boolean =>
  (value === null) || (typeof value !== 'object');
