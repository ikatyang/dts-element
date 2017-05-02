export const emit_named_as = (name: string | null): string =>
  (name === null)
    ? ''
    : ` as ${name}`;
