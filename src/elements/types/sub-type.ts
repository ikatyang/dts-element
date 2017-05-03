import {emit_brackets} from '../../helpers/emit-brackets';
import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {NamespaceDeclaration} from '../declarations/namespace-declaration';
import {Type} from '../type';

export interface ISubTypeRequiredParameters {
  target: Type;
}

export interface ISubTypeOptionalParameters {
  namespaces: NamespaceDeclaration[];
  path: (Declaration | Type)[];
}

export class SubType extends Type<ISubTypeRequiredParameters, ISubTypeOptionalParameters> {

  public get default_parameters(): ISubTypeOptionalParameters {
    return {
      namespaces: [],
      path: [],
    };
  }

  public _emit(stack: Stack): string {
    const {target} = this.parameters;
    const target_content = emit_brackets(target.emit(stack), target);
    const namespaces = this.parameters.namespaces
      .map((namespace: NamespaceDeclaration) => namespace.parameters.name);
    const path = this.parameters.path
      .map((element: Declaration | Type): string => `[${
        (element instanceof Declaration)
          ? JSON.stringify(element.parameters.name)
          : element.emit(stack)
      }]`)
      .join('');
    return `${[...namespaces, target_content].join('.')}${path}`;
  }

}
