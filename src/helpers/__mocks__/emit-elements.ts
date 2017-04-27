// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../../element';
import {indent} from '../../utils/indent';
import {line_map} from '../../utils/line-map';

export const emit_elements = (elements: AnyElement[]): string => {
  const joined_elements = elements
    .map((element: AnyElement): string => element._emit(null))
    .join('\n');
  const indented_elements = line_map(joined_elements, indent);
  return `[emit-elements\n${indented_elements}\n]`;
};
