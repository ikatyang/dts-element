// tslint:disable-next-line no-unused-variable
import {AnyDeclaration, Declaration} from '../../elements/declaration';
import {indent} from '../../utils/indent';
import {line_map} from '../../utils/line-map';

export const join_declarations = (declarations: AnyDeclaration[]): string => {
  const joined_declarations = declarations
    .map((declaration: AnyDeclaration): string => declaration._emit(null))
    .join('\n');
  const indented_declarations = line_map(joined_declarations, indent);
  return `[join-declarations\n${indented_declarations}\n]`;
};
