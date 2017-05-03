import {emit_brackets} from '../../helpers/emit-brackets';
import {Stack} from '../../stack';
import {Declaration} from '../declaration';
import {NamespaceDeclaration} from '../declarations/namespace-declaration';
import {Type} from '../type';

export interface ISubTypeRequiredParameters {
  path: (NamespaceDeclaration | Type | Declaration)[];
}

// tslint:disable-next-line no-empty-interface
export interface ISubTypeOptionalParameters {}

export class SubType extends Type<ISubTypeRequiredParameters, ISubTypeOptionalParameters> {

  private _instance_of_sub_type: true;

  public get default_parameters(): ISubTypeOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    let has_main_type = false;
    return this.parameters.path
      .map((element: NamespaceDeclaration | Declaration | Type): string =>
        (element instanceof NamespaceDeclaration)
          ? `${element.parameters.name}.`
          : (element instanceof Type) && !has_main_type
            // tslint:disable-next-line strict-boolean-expressions
            ? (has_main_type = true) && emit_brackets(element.emit(stack), element)
            : `[${
              (element instanceof Declaration)
                ? JSON.stringify(element.parameters.name)
                : element.emit(stack)
              }]`)
      .join('');
  }

}
