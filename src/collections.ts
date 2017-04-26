import {NamespaceDeclaration} from './elements/declarations/namespace';
import {VariableDeclaration} from './elements/declarations/variable';
import {IndexSignature} from './elements/index-signature';
import {Reference} from './elements/reference';

export type RootElement = Reference | NamespaceDeclaration;
export type MemberOwned = IndexSignature | VariableDeclaration;
