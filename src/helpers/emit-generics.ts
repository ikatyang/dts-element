// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
import {GenericType} from '../elements/types/generic';

export const emit_generics = (generics: GenericType[], container: AnyElement | null): string =>
  (generics.length === 0)
    ? ''
    : `<${generics.map((generic: GenericType) => generic._emit(container)).join(', ')}>`;
