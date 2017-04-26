import {AnyElement} from '../element';
import {GenericType} from '../elements/types/generic';

export const genericify = (generics: GenericType[], container: AnyElement): string =>
  (generics.length === 0)
    ? ''
    : `<${generics.map((generic: GenericType) => generic._emit(container)).join(', ')}>`;
