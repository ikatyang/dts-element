// tslint:disable-next-line no-unused-variable
import {Container} from '../collections';
import {AnyElement, Element} from '../element';
import {GenericType} from '../elements/types/generic';

export const emit_generics = (generics: GenericType[], container: Container): string =>
  (generics.length === 0)
    ? ''
    : `<${generics.map((generic: GenericType) => generic._emit(container)).join(', ')}>`;
