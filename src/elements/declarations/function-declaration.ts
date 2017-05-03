import {any_type} from '../../constants';
import {emit_declaration_name} from '../../helpers/emit-declaration-name';
import {emit_declare} from '../../helpers/emit-declare';
import {emit_export} from '../../helpers/emit-export';
import {emit_function} from '../../helpers/emit-function';
import {emit_generics} from '../../helpers/emit-generics';
import {emit_parameters} from '../../helpers/emit-parameters';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {Parameter} from '../parameter';
import {Type} from '../type';
import {TypeAssertion} from '../type-assertion';
import {FunctionType} from '../types/function-type';
import {GenericType} from '../types/generic-type';

// tslint:disable-next-line no-empty-interface
export interface IFunctionDeclarationRequiredParameters {}

export interface IFunctionDeclarationOptionalParameters {
  type: FunctionType;
  export: boolean;
}

export class FunctionDeclaration
    extends Declaration<IFunctionDeclarationRequiredParameters, IFunctionDeclarationOptionalParameters> {

  private _instance_of_function_declaration: true;

  public get default_parameters(): IDeclarationOptionalParameters & IFunctionDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      type: new FunctionType({return: any_type}),
      export: false,
    });
  }

  public _emit_raw(stack: Stack): string {
    const {type} = this.parameters;
    const name = emit_declaration_name(this.parameters.name, stack);
    const parameters = emit_parameters(type.parameters.parameters, stack);
    const generics = emit_generics(type.parameters.generics, stack, true);
    const return_type = type.parameters.return.emit(stack);
    const declare = emit_declare(stack);
    const func = emit_function(stack);
    const an_export = emit_export(this.parameters.export, stack);
    return `${an_export}${declare}${func}${name}${generics}(${parameters}): ${return_type};`;
  }

}
