import {indent} from '../utils/indent';
import {line_map} from '../utils/line-map';

export const indent_every_line = (str: string): string => line_map(str, indent);
