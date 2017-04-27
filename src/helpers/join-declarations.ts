// tslint:disable-next-line no-unused-variable
import {AnyElement, Element} from '../element';
// tslint:disable-next-line no-unused-variable
import {AnyDeclaration, Declaration} from '../elements/declaration';

export const join_declarations = (declarations: AnyDeclaration[], container: AnyElement | null): string =>
  declarations.map((declaration: AnyDeclaration) => declaration._emit(container)).join('\n');
