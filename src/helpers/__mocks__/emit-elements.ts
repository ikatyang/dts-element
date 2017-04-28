import {Element} from '../../element';
import {indent} from '../../utils/indent';
import {line_map} from '../../utils/line-map';

export const emit_elements = (elements: Element[]): string => {
  const joined_elements = elements
    .map((element: Element): string => element._emit(null))
    .join('\n');
  const indented_elements = line_map(joined_elements, indent);
  return `[emit-elements\n${indented_elements}\n]`;
};
