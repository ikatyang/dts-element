import {Element} from '../../element';
import {indent} from '../../utils/indent';
import {line_map} from '../../utils/line-map';

export const emit_elements = (elements: Element[], _stack: any, separator: string = '\n'): string => {
  const joined_elements = elements
    .map((element: Element): string => element.emit())
    .join(separator);
  const content = (separator.indexOf('\n') === -1)
    ? ` [${joined_elements}]`
    : `\n${line_map(joined_elements, indent)}\n`;
  return `[emit-elements${content}]`;
};
