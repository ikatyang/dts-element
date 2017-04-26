import {line_map} from './line-map';

export const emit_jsdoc = (str: string): string => {
  const content = line_map(str, (line: string) => ` * ${line}`);
  return (content.length === 0)
    ? content
    : `/**\n${content}\n */`;
};
