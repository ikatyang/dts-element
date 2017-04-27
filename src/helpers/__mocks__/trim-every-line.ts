import {indent} from '../../utils/indent';
import {line_map} from '../../utils/line-map';

export const trim_every_line = (str: string): string => `[trim-every-line\n${line_map(str, indent)}\n]`;
