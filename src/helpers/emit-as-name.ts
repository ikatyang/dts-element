export const emit_as_name = (name: string | null): string =>
  (name === null)
    ? ''
    : ` as ${name}`;
