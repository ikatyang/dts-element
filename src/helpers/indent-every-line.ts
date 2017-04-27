import {line_map} from '../utils/line-map';
import {indent} from './indent';

export const indent_every_line = (str: string): string => line_map(str, indent);
