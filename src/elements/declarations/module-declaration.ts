import {emit_export} from '../../helpers/emit-export';
import {emit_members} from '../../helpers/emit-members';
import {Stack} from '../../stack';
import {Declaration, IDeclarationOptionalParameters} from '../declaration';
import {ObjectMember} from '../members/object-member';
import {GenericType} from '../types/generic-type';

export interface IModuleDeclarationRequiredParameters {
  name: string;
}

export interface IModuleDeclarationOptionalParameters {
  children: Declaration[];
}

export class ModuleDeclaration
    extends Declaration<IModuleDeclarationRequiredParameters, IModuleDeclarationOptionalParameters> {

  private _instance_of_module_declaration: true;

  public get default_parameters(): IDeclarationOptionalParameters & IModuleDeclarationOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      children: [],
    });
  }

  public _emit_raw(stack: Stack): string {
    const {name, children} = this.parameters;
    return `declare module ${JSON.stringify(name)} ${emit_members(children, stack)}`;
  }

}
