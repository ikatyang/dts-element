import * as ts from 'typescript';
import {IParameterDeclaration} from '../declarations/parameter-declaration';
import {create_class_member, IClassMember} from '../members/class-member';
import {parse_native} from '../parse';
import {create_constructor_type} from '../types/constructor-type';
import {if_defined} from '../utils';

export const parse_constructor = (node: ts.ConstructorDeclaration): IClassMember =>
  create_class_member({
    owned: create_constructor_type({
      parameters: if_defined(node.parameters, parameters => parameters.map(parse_native) as IParameterDeclaration[]),
    }),
  });
