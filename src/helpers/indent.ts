import {line_map} from './line-map';

export const indent = (str: string): string => line_map(str, (line: string) => `  ${line}`);
