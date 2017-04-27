import {indent} from '../../utils/indent';
import {line_map} from '../../utils/line-map';

export const indent_every_line = (str: string): string => `[indent-every-line\n${line_map(str, indent)}\n]`;
