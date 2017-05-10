// tslint:disable-next-line:typedef
export const get_default_placeholder_name_generator = () =>
  (parameter_name: string): string => `_${parameter_name}`;
