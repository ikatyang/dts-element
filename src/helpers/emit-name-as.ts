export const emit_name_as = (name: string | null): string =>
  (name === null)
    ? ''
    : `${name} as `;
