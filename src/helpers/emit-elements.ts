// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';

export const emit_elements = (declarations: AnyElement[], container: AnyElement | null): string =>
  declarations.map((element: AnyElement) => element._emit(container)).join('\n');
