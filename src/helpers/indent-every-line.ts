import {indent} from './indent';
import {line_map} from './line-map';

export const indent_every_line = (str: string): string => line_map(str, indent);
