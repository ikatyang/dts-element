import {Container} from '../collections';
import {GenericType} from '../elements/types/generic';

export const emit_generics = (generics: GenericType[], container: Container): string =>
  (generics.length === 0)
    ? ''
    : `<${generics.map((generic: GenericType) => generic._emit(container)).join(', ')}>`;
