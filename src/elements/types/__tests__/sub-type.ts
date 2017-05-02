jest.unmock('../sub-type');

import {any_type} from '../../../constants';
import {InterfaceDeclaration} from '../../declarations/interface-declaration';
import {NamespaceDeclaration} from '../../declarations/namespace-declaration';
import {VariableDeclaration} from '../../declarations/variable-declaration';
import {InterfaceType} from '../../types/interface-type';
import {SubType} from '../sub-type';

const namespace_declaration_a = new NamespaceDeclaration({name: 'A'});
const namespace_declaration_b = new NamespaceDeclaration({name: 'B'});

const interface_declaration = new InterfaceDeclaration({name: 'X'});
const variable_declaration = new VariableDeclaration({name: 'y'});

const interface_type = new InterfaceType({owned: interface_declaration});

describe('#emit()', () => {
  it('should return correctly', () => {
    expect(new SubType({
      namespaces: [namespace_declaration_a, namespace_declaration_b],
      target: interface_type,
      path: [variable_declaration, any_type],
    }).emit()).toMatchSnapshot();
  });
});
